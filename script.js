/* ─── CUSTOM CURSOR ─── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
  ring.style.transform   = `translate(${x - 14}px, ${y - 14}px)`;
});

document.querySelectorAll('a, button, .skill-pill, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width      = '8px';
    cursor.style.height     = '8px';
    cursor.style.background = '#f0e0b0';
    ring.style.width        = '40px';
    ring.style.height       = '40px';
    ring.style.borderColor  = 'rgba(201,169,110,0.9)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width      = '6px';
    cursor.style.height     = '6px';
    cursor.style.background = '#e8d5a3';
    ring.style.width        = '28px';
    ring.style.height       = '28px';
    ring.style.borderColor  = 'rgba(201,169,110,0.55)';
  });
});

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => navObserver.observe(section));