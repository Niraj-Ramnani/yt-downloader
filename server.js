const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.render("index", {
    success: null,
    message: null,
    song_title: null,
    song_link: null,
    videoLink: "" // Add this to avoid undefined error
  });
});

// Convert Video to Downloadable Link
app.post("/convert", async (req, res) => {
  const videoLink = req.body.videoLink;

  if (!videoLink || videoLink.trim() === "") {
    return res.render("index", {
      success: false,
      message: "Please enter a valid YouTube URL",
      song_title: null,
      song_link: null,
      videoLink: videoLink || "" // Pass videoLink back to persist input
    });
  }

  try {
    const fetchAPI = await fetch(`https://${process.env.API_HOST}/mp3?url=${encodeURIComponent(videoLink)}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST,
      },
    });

    const response = await fetchAPI.json();

    if (response.success) {
      return res.render("index", {
        success: true,
        message: "Download ready!",
        song_title: response.title,
        song_link: response.download,
        videoLink: videoLink || "" // Pass videoLink back
      });
    } else {
      return res.render("index", {
        success: false,
        message: "Invalid link or video unavailable",
        song_title: null,
        song_link: null,
        videoLink: videoLink || "" // Pass videoLink back
      });
    }
  } catch (error) {
    console.error(error);
    return res.render("index", {
      success: false,
      message: "An error occurred. Please try again.",
      song_title: null,
      song_link: null,
      videoLink: videoLink || "" // Pass videoLink back
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});