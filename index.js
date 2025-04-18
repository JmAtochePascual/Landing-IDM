document.addEventListener('DOMContentLoaded', () => {
  const hambuguerMenuHTML = document.querySelector('#header-buttom');
  const sidebarMenuHTML = document.querySelector('#sidebar-buton');
  const sidebarHTML = document.querySelector('#sidebar');
  const body = document.body;

  const toggleSidebar = () => {
    sidebarHTML.classList.toggle('show-sidebar');
    body.classList.toggle('no-scroll');
  };


  hambuguerMenuHTML.addEventListener('click', toggleSidebar);
  sidebarMenuHTML.addEventListener('click', toggleSidebar);
})