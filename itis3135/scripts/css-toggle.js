const cssToggle = document.getElementById('toggle-css');
const cssLink = document.getElementById('styless');


cssToggle.addEventListener('click', () => {
    if(cssLink.hasAttribute('href')){
        cssLink.removeAttribute('href');
    } else {
        cssLink.setAttribute('href', 'styles/default.css')
    }
});