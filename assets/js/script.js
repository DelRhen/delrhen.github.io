document.addEventListener('DOMContentLoaded', function () {


  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '6px 0';
      nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
    } else {
      nav.style.padding = '';
      nav.style.boxShadow = '';
    }
  });

  

  document.querySelectorAll('#navMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navMenu .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


  const darkToggle = document.getElementById('darkToggle');
  const icon = darkToggle.querySelector('i');

  function applyTheme(dark) {
    if (dark) {
      document.body.classList.add('dark');
      icon.className = 'bi bi-sun-fill';
    } else {
      document.body.classList.remove('dark');
      icon.className = 'bi bi-moon-fill';
    }
  }

  let isDark = true;
  applyTheme(isDark);

  darkToggle.addEventListener('click', () => {
    isDark = !isDark;
    applyTheme(isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  });

  

  const fadeEls = document.querySelectorAll('.fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));

});
