document.getElementById('downloadForm').addEventListener('submit', function(e) {
     const loadingGif = document.querySelector('.loading-gif');
     const result = document.querySelector('.result');
     loadingGif.style.display = 'inline-block'; 
     this.querySelector('button').disabled = true; 
     result.classList.remove('active'); 
 
     setTimeout(() => {
         loadingGif.style.display = 'none';
         this.querySelector('button').disabled = false;
         result.classList.add('active'); 
     }, 2000); 
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
 
     
     const result = document.querySelector('.result');
     if (result && '<%= success %>' !== 'null') {
         result.classList.add('active');
     }
 });