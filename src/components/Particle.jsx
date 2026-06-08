import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";

// Loads the engine once before any particles render. Defined at module scope so
// its reference is stable across renders, as ParticlesProvider requires.
// loadSlim ships only the features we use, keeping the bundle small.
const initEngine = async (engine) => {
  await loadSlim(engine);
};

function Particle() {
  const options = useMemo(
    () => ({
      // Cap the frame rate so the background never fights the page for CPU.
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 1500,
          },
        },
        links: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          enable: true,
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          value: { min: 0.05, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // The provider only renders its children once the engine is ready, so it wraps
  // just the particles here — never the whole app, which would block first paint.
  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
