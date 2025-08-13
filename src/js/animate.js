
const animationPage = (sectionsHTML) => {
  const triggerAnimation = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll("[data-animation]");
        children.forEach(element => element.classList.add('unset'));
      }
    })
  }

  const options = { threshold: 0.25, };

  const observer = new IntersectionObserver(triggerAnimation, options);

  sectionsHTML.forEach(section => observer.observe(section));
}


let lastScroll = 0;

const handleHeaderScroll = (headerHTML) => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 1) {
    headerHTML.classList.remove('header--scroll-up', 'header--scroll-down');
    return;
  }

  const isScrollingDown = currentScroll > lastScroll;
  headerHTML.classList.toggle('header--scroll-down', isScrollingDown);
  headerHTML.classList.toggle('header--scroll-up', !isScrollingDown);

  lastScroll = currentScroll;
}

export { animationPage, handleHeaderScroll }
