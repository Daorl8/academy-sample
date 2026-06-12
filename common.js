function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('drawer').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('drawer').classList.remove('open');
}
// 현재 페이지 nav 활성화
document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach(a => {
  if (a.href === window.location.href) a.classList.add('active');
});
