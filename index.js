// Constants
const SCROLL_THRESHOLD = 100;
const SELECTORS = {
  forms: '.form',
  toggleButton: '#toggle-button',
  sidebar: '#sidebar',
  closeButton: '#close-button',
  sidebarNavLinks: '.sidebar-nav-link',
  header: '.header'
};

const CLASSES = {
  show: 'show',
  noScroll: 'no-scroll',
  headerScroll: 'header-scroll'
};

// Toast Configuration
const TOAST_CONFIG = {
  text: "Notification sent, check your email",
  className: "email-toast",
  position: "center",
  style: {
    background: "#158de8"
  }
};

// DOM Elements
const elements = {
  forms: document.querySelectorAll(SELECTORS.forms),
  toggleButton: document.getElementById(SELECTORS.toggleButton.slice(1)),
  sidebar: document.getElementById(SELECTORS.sidebar.slice(1)),
  closeButton: document.getElementById(SELECTORS.closeButton.slice(1)),
  sidebarNavLinks: document.querySelectorAll(SELECTORS.sidebarNavLinks),
  header: document.querySelector(SELECTORS.header)
};

// Utility Functions
const toggleSidebar = () => {
  elements.sidebar.classList.toggle(CLASSES.show);
  document.body.classList.toggle(CLASSES.noScroll);
};

const closeSidebar = () => {
  elements.sidebar.classList.remove(CLASSES.show);
  document.body.classList.remove(CLASSES.noScroll);
};

const handleScroll = () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    elements.header.classList.add(CLASSES.headerScroll);
  } else {
    elements.header.classList.remove(CLASSES.headerScroll);
  }
};

const mostrarToast = () => {
  Toastify(TOAST_CONFIG).showToast();
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  mostrarToast();
  e.target.reset();
};

// Event Handlers Setup
const setupEventListeners = () => {
  // Form submissions
  elements.forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });

  // Sidebar controls
  elements.toggleButton.addEventListener('click', toggleSidebar);
  elements.closeButton.addEventListener('click', closeSidebar);
  elements.sidebarNavLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Scroll handler
  window.addEventListener('scroll', handleScroll);
};

// Initialize
document.addEventListener('DOMContentLoaded', setupEventListeners);
