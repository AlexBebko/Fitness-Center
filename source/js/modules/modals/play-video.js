const videos = document.querySelectorAll('[data-video]');

function playVideo() {
  if (videos) {
    videos.forEach(function (video) {
      video.addEventListener('click', function () {

        if (video.classList.contains('is-active')) {
          return;
        }

        video.classList.add('is-active');
        const src = video.dataset.src;
        video.insertAdjacentHTML('afterbegin', '<iframe src= "' + src + '"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      });
    });
  }
}


export {playVideo};
