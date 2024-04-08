document.addEventListener("DOMContentLoaded", function(event) {
const footer = document.getElementById('footer');
const header = document.getElementsByTagName('header')[0];
 const h1 = document.createElement('h1');
   header.innerHTML = `<h1>Edward Henriquez Enigmatic Hamster 🎧 ITIS 3135</h1>
   <div id="navLinks1"></div>
   <div class="navSeperate"></div>
   <div class="navTwo" id="navLinks2"></div>`;
    // Function to load navigation links
function loadNavigationLinks(containerId, navKey) {
  // Fetch the JSON data
  fetch('jason/headnfoot.json')
    .then(response => response.json())
    .then(data => {
      // Get the appropriate set of links based on navKey
      const navLinksData = data[navKey];
      if (!navLinksData) {
        console.error('Invalid navKey:', navKey);
        return;
      }

      // Parse JSON data and generate HTML
      const navLinksContainer = document.getElementById(containerId);
      navLinksData.forEach((link, index) => {
        const a = document.createElement('a');
        a.classList.add("link_space");
        a.classList.add('special-nav');
        a.href = link.url;
        a.textContent = link.title;
        navLinksContainer.appendChild(a);

        // Add divider if not the last link
        if (index !== navLinksData.length - 1) {
          const divider = document.createElement('span');
          divider.textContent = ' 🎧 '; // You can adjust the divider as needed
          navLinksContainer.appendChild(divider);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

// Load navigation links for both navs
loadNavigationLinks('navLinks1', 'nav1');
loadNavigationLinks('navLinks2', 'nav2');
        
// Function to validate HTML

loadNavigationLinks('footer', 'footer');
const AYW = document.createElement('p');
const PBB = document.createElement('p');
PBB.innerHTML = `<p class="center-all">Page built by <a href="enigmatichamster.com/">Edward Henriquez Enterprises</a>, Certified in <a href="https://www.freecodecamp.org/certification/edwardh7/responsive-web-design">RWD</a> & <a href="https://www.freecodecamp.org/certification/edwardh7/javascript-algorithms-and-data-structures-v8">JS </a>&copy;2024</p>`
AYW.innerHTML = `<i>Amplify Your World</i>`;
document.getElementById('foot').appendChild(PBB);
document.getElementById('foot').appendChild(AYW);
});
function validateHTML() {
  const currentURL = encodeURIComponent(window.location.href);
  window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

document.getElementById('html-val').addEventListener('click', validateHTML());

// Function to validate CSS
function validateCSS() {
  const currentURL = encodeURIComponent(window.location.href);
  window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
  window.open("https://wave.webaim.org/report#/" + location.href, "_blank");
}