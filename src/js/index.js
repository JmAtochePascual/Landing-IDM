import { handleHeaderScroll, animationPage } from "./animate.js";
import { showSidebar, currentYear, showNotification } from "./helpers.js";

const body = document.body;
const headerHTML = document.querySelector('#header');
const openMenuButton = document.querySelector('#open-menu');
const closeMenuButton = document.querySelector('#close-menu');
const sidebarHTML = document.querySelector('#sidebar');
const linksSidebarHTML = document.querySelectorAll('.sidebar__link');
const formsHTML = document.querySelectorAll('.form');
const copyright = document.querySelector('#copyRight');
const sectionsHTML = document.querySelectorAll('.section-animate');

document.addEventListener('DOMContentLoaded', () => {
  addEventListener('scroll', () => handleHeaderScroll(headerHTML));
  animationPage(sectionsHTML);

  openMenuButton.addEventListener('click', () => showSidebar(body, sidebarHTML));
  closeMenuButton.addEventListener('click', () => showSidebar(body, sidebarHTML));
  linksSidebarHTML.forEach(link => link.addEventListener('click', () => showSidebar(body, sidebarHTML)));

  formsHTML.forEach(form => form.addEventListener('submit', showNotification));
  copyright.innerHTML = `All rights reserved &copy; ${currentYear()}`;
})