document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const openMenuButton = document.querySelector('#open-menu');
  const closeMenuButton = document.querySelector('#close-menu');
  const sidebarHTML = document.querySelector('#sidebar');
  const linksSidebarHTML = document.querySelectorAll('.sidebar__link');
  const formsHTML = document.querySelectorAll('.form');
  const copyright = document.querySelector('#copyRight');

  const toggleSidebar = () => {
    sidebarHTML.classList.toggle('show-sidebar');
    body.classList.toggle('no-scroll');
  };

  const showNotification = (event) => {
    event.preventDefault();

    Toastify({
      text: "Check your email",
      duration: 3000,
      newWindow: true,
      style: {
        background: '#158de8',
      },
    }).showToast();
  };


  copyright.innerHTML = `All rights reserved &copy; ${new Date().getFullYear()}`;

  openMenuButton.addEventListener('click', toggleSidebar);

  closeMenuButton.addEventListener('click', toggleSidebar);

  linksSidebarHTML.forEach(link => link.addEventListener('click', toggleSidebar));

  formsHTML.forEach(form => form.addEventListener('submit', showNotification));
})