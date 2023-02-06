const triggers = document.querySelectorAll('[data-tab-trigger]');
const tabs = document.querySelectorAll('[data-tab-content]');


function openTab() {
  if (triggers || tabs) {
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = evt.target.getAttribute('href').replace('#', '');

        triggers.forEach((child) => {
          child.classList.remove('is-active');
        });

        tabs.forEach((child) => {
          child.classList.remove('is-active');
        });

        trigger.classList.add('is-active');
        document.getElementById(id).classList.add('is-active');
      });
    });
  }
}

export {openTab};
