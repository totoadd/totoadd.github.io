particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 100
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0.3,
          color: "#E0E0E0"
        },
        polygon: {
          nb_sides: 6
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 10,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 50,
        color: "#ffffff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 60,
          rotateY: 120
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
$("#particles-js canvas").css("background-color", getRandomColor());
