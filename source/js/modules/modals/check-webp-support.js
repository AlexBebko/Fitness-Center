function checkSupport() {
  const html = document.documentElement;
  const webp = new Image();

  webp.onload = webp.onerror = function () {
    const isSupported = (webp.height === 2);

    if (!isSupported) {
      if (html.className.indexOf('webp') >= 0) {
        html.className = html.className.replace(/\bwebp\b/, 'no-webp');
      } else {
        html.className += ' no-webp';
      }
    }
  };
  webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

export {checkSupport};
