import './main.scss';
import './modernizr-custom';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project__inner').forEach(el => el.classList.add('animate'));
});