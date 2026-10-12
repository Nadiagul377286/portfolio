function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('active');
}
function submitForm(e){
  e.preventDefault();
  alert('Thank you Nadia! Your message has been sent successfully. I will reply soon!');
  e.target.reset();
}
// Close menu when clicking link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});