// Sidebar navigation toggle
document.querySelectorAll('.nav-section-title').forEach(title => {
  title.addEventListener('click', function() {
    const section = this.parentElement;
    section.classList.toggle('active');
  });
});
