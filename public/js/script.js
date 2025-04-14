document.getElementById('downloadForm').addEventListener('submit', function(e) {
     const loadingGif = document.querySelector('.loading-gif');
     loadingGif.style.display = 'inline-block'; // Show loading GIF
     this.querySelector('button').disabled = true; // Disable button to prevent multiple submissions
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
 });