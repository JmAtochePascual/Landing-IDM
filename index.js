document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.querySelector('#open-menu');
  const closeMenuButton = document.querySelector('#close-menu');
  const linksHTML = document.querySelectorAll('.sidebar__link');
  const sidebarHTML = document.querySelector('#sidebar');
  const formsHTML = document.querySelectorAll('.form');
  const alertHTML = document.querySelector('#alert');
  const body = document.body;

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


  openMenuButton.addEventListener('click', toggleSidebar);

  closeMenuButton.addEventListener('click', toggleSidebar);

  linksHTML.forEach(link => link.addEventListener('click', toggleSidebar));

  formsHTML.forEach(form => form.addEventListener('submit', showNotification));
})