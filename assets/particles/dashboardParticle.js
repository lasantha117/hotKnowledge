import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const DashboardParticlesComponent = (props) => {
  const [particlesInitialized, setParticlesInitialized] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
 
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setParticlesInitialized(true);
    };

    initializeParticles();

 
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#EBDEDC",
        },
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#6E260E",
        },
        links: {
          color: "#C70039",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return particlesInitialized ? (
    <Particles id={props.id} init={particlesLoaded} options={options} />
  ) : null;
};

export default DashboardParticlesComponent;
