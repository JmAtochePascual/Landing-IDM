const showSidebar = (body, sidebarHTML) => {
  body.classList.toggle('no-scroll');
  sidebarHTML.classList.toggle('show-sidebar');
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

const currentYear = () => new Date().getFullYear();

export { showSidebar, currentYear, showNotification };