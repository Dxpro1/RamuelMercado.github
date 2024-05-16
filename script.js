window.onload = function () {
  // Typewriter effect for txt variable
  var txt = 'Hey there!';
  var i = 0;
  var speed = 10;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('demo1').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Typewriter effect for 'This is my experience.'
      var j = 0;
      var text1 = '';
      var targetId1 = 'demo1';
      var speed1 = 50;

      function typeWriter1() {
        if (j < text1.length) {
          document.getElementById(targetId1).innerHTML += text1.charAt(j);
          j++;
          setTimeout(typeWriter1, speed1);
        } else {
          // Typewriter effect for 'I`m Ramuel, '
          var k = 0;
          var text2 = 'I`m Ramuel, ';
          var targetId2 = 'demo2';
          var speed2 = 50;

          function typeWriter2() {
            if (k < text2.length) {
              document.getElementById(targetId2).innerHTML += text2.charAt(k);
              k++;
              setTimeout(typeWriter2, speed2);
            } else {
              // Typewriter effect for 'Demo 3'
              var l = 0;
              var text3 = 'a front-end developer.';
              var targetId3 = 'demo3';
              var speed3 = 50;

              function typeWriter3() {
                if (l < text3.length) {
                  document.getElementById(targetId3).innerHTML +=
                    text3.charAt(l);
                  l++;
                  setTimeout(typeWriter3, speed3);
                } else {
                  // Typewriter effect for 'Demo 4'
                  var m = 0;
                  var text4 =
                    'I love building websites that look great and work smoothly.';
                  var targetId4 = 'demo4';
                  var speed4 = 50;

                  function typeWriter4() {
                    if (m < text4.length) {
                      document.getElementById(targetId4).innerHTML +=
                        text4.charAt(m);
                      m++;
                      setTimeout(typeWriter4, speed4);
                    } else {
                      // Show the button after typewriter effects are done
                      document.getElementById('projectsBtn').style.display =
                        'inline-block';
                    }
                  }

                  typeWriter4();
                }
              }

              typeWriter3();
            }
          }

          typeWriter2();
        }
      }

      typeWriter1();
    }
  }

  typeWriter();
};

function scrollToProjects() {
  // Scroll to the projects section
  var projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item, .item1');

  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the item is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Stop observing once the animation has triggered
      }
    });
  }, observerOptions);

  items.forEach((item) => {
    observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', function (event) {
  var gif = document.getElementById('gif');
  var lastLoadedTime = localStorage.getItem('lastLoadedTime');

  // Check if the page was loaded before
  if (lastLoadedTime) {
    var currentTime = new Date().getTime();

    // Check if the current time is different from the last loaded time
    if (currentTime !== parseInt(lastLoadedTime)) {
      // Reload the GIF by appending a random query string
      gif.src = gif.src.split('?')[0] + '?' + new Date().getTime();
    }
  }

  // Store the current time as the last loaded time
  localStorage.setItem('lastLoadedTime', new Date().getTime().toString());
});
// Add event listener for when modal is shown
$('#navbarSupportedContent').on('shown.bs.modal', function () {
  $('body').addClass('modal-open'); // Add class to body to prevent scrolling
});

// Add event listener for when modal is hidden
$('#navbarSupportedContent').on('hidden.bs.modal', function () {
  $('body').removeClass('modal-open'); // Remove class to allow scrolling
});

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.scrollY > 50; // Adjust the scroll distance as needed

  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
