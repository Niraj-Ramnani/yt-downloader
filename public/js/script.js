document.getElementById('downloadForm').addEventListener('submit', function(e) {
     const loadingGif = document.querySelector('.loading-gif');
     const result = document.querySelector('.result');
     loadingGif.style.display = 'inline-block'; // Show loading GIF
     this.querySelector('button').disabled = true; // Disable button
     result.classList.remove('active'); // Hide result initially
 
     // Simulate result display after submission (adjust based on server response if needed)
     setTimeout(() => {
         loadingGif.style.display = 'none';
         this.querySelector('button').disabled = false;
         result.classList.add('active'); // Show result after loading
     }, 2000); // Adjust timeout to match server response time
 });
 
 document.addEventListener('DOMContentLoaded', function() {
     const form = document.getElementById('downloadForm');
     form.addEventListener('submit', function(e) {
         if (!this.querySelector('input[name="videoLink"]').value.includes('youtube.com') && 
             !this.querySelector('input[name="videoLink"]').value.includes('youtu.be')) {
             e.preventDefault();
             alert('Please enter a valid YouTube URL.');
         }
     });
 
     // Show existing result on page load if present
     const result = document.querySelector('.result');
     if (result && '<%= success %>' !== 'null') {
         result.classList.add('active');
     }
 });