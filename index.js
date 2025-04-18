
document.addEventListener('DOMContentLoaded', () => {
  const copyRightHTML = document.querySelector('#copyRight');
  const formsHTML = document.querySelectorAll('.form');
  const hamburgerButtonHtml = document.querySelector('#toggle-button');
  const closeButtonHtml = document.querySelector('#close-button');
  const sidebarnHtml = document.querySelector('#sidebar');

  // Funtions

  const sendNotification = (event) => {
    event.preventDefault();

    Toastify({
      text: "Notification sent, check your email",
      duration: 1000,
      gravity: "top",
      position: "center",
      style: {
        background: '#158de8',
      },
    }).showToast();
  };

  const toggleSidebar = () => {
    sidebarnHtml.classList.toggle('show');
    document.body.classList.toggle('fixed')
  };

  // Events

  formsHTML.forEach((form) => form.addEventListener('submit', sendNotification));

  hamburgerButtonHtml.addEventListener('click', toggleSidebar);

  closeButtonHtml.addEventListener('click', toggleSidebar);

  copyRightHTML.innerHTML = `All rights reserved &copy; ${new Date().getFullYear()}`;

});
