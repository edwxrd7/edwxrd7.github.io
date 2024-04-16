document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
      if (section.id === targetId) {
        section.classList.add('active');
      }
    });
  });
});

// Color change when link is clicked
const links = document.querySelectorAll(".link");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    links.forEach(function (otherLink) {
      otherLink.classList.remove("clicked"); // Remove the "clicked" class from other links
    });
    link.classList.add("clicked"); // Add the "clicked" class to the clicked link
  });
});

$(document).ready(() => {

  const $navMenu = $('#navMenu');
  const $overlay = $('#overlay');
  const $close = $('li a');

  $('#openNav').on('click', () => {
    $navMenu.show('slow');
    $overlay.show();
  });
  if (window.innerWidth <= 700) {
    $navMenu.on('click', () => {
      $navMenu.hide(400);
      $overlay.hide();
    }
    )
  };

  $overlay.on('click', () => {
    $navMenu.hide(400);
    $overlay.hide();
  });

  $close.on('click', () => {
    $navMenu.hide(400);
    $overlay.hide();
  });

  function scrollFunction() {
    if (window.innerWidth <= 700) {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 40) {
        document.getElementById("water").style.padding = "15px 0";
        document.getElementById('logo').style.width = "80px";
        document.getElementById('openNav').style.width = "70px";
        document.getElementById('openNav').style.height = "30px";
        document.getElementById('openNav').style.fontSize = '0';
      } else {
        document.getElementById("water").style.padding = "50px 0";
        document.getElementById('logo').style.width = "100px";
        document.getElementById('openNav').style.width = "100px";
        document.getElementById('openNav').style.height = "40px";
        document.getElementById('openNav').style.fontSize = '12px';
        document.getElementById('name').style.fontSize = '30px';
      }
    } else {
      // Adjust styles for screens wider than 700px
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {
        document.getElementById("water").style.padding = "15px 0";
        document.getElementById('logo').style.width = "75px"; // Adjusted width for wider screens
        document.getElementById('openNav').style.width = "70px"; // Adjusted width for wider screens
        document.getElementById('openNav').style.height = "30px"; // Adjusted height for wider screens
        document.getElementById('openNav').style.fontSize = '0'; // Adjusted font size for wider screens
      } else {
        document.getElementById("water").style.padding = "50px 0";
        document.getElementById('logo').style.width = "150px"; // Adjusted width for wider screens
        document.getElementById('openNav').style.width = "140px"; // Adjusted width for wider screens
        document.getElementById('openNav').style.height = "60px"; // Adjusted height for wider screens
        document.getElementById('openNav').style.fontSize = '13px'; // Adjusted font size for wider screens
      }
    }
  }

  // Call the function on page load and scroll
  scrollFunction();
  window.addEventListener("scroll", scrollFunction);
  // Call the function on page load and resize
  window.addEventListener("resize", scrollFunction);
});
