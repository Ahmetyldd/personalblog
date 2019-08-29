import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticlesContainer extends Component {
  render() {
    const styles = {
      position: "absolute"
    };

    return (
      <React.Fragment>
        <Particles
          width={"100%"}
          height={"93%"}
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 200
                }
              },
              color: {
                value: "#709425"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 2,
                  color: "#709425"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 10,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 5,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: "#709425",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 800,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 1
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          style={styles}
        />
      </React.Fragment>
    );
  }
}

export default ParticlesContainer;
