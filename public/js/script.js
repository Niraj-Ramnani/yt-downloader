document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('downloadForm');
    const loadingGif = document.querySelector('.loading-gif');
    const result = document.querySelector('.result');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.querySelector('.progress-fill');

    form.addEventListener('submit', function (e) {
      const urlInput = this.querySelector('input[name="videoLink"]').value;
      if (!urlInput.includes('youtube.com') && !urlInput.includes('youtu.be')) {
        e.preventDefault();
        alert('Please enter a valid YouTube URL.');
        return;
      }

      loadingGif.style.display = 'inline-block';
      this.querySelector('button').disabled = true;
      if (result) result.classList.remove('active');

      progressBar.style.display = 'block';
      progressFill.style.width = '0%';
      progressFill.style.animation = 'loadProgress 2s linear forwards';

      setTimeout(() => {
        loadingGif.style.display = 'none';
        this.querySelector('button').disabled = false;
        if (result) result.classList.add('active');
        progressBar.style.display = 'none';
      }, 2000);
    });

    if (result && '<%= success %>' !== 'null') {
      result.classList.add('active');
    }
  });