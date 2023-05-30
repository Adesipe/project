let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn-icon').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}