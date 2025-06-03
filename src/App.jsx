import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { IconBrandGithub, IconBrandTwitter, IconMail, IconWorld } from '@tabler/icons-react';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#111827",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8 bg-gray-900 bg-opacity-50 rounded-xl backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-6">Adrian Ruiz</h1>
          <p className="text-xl mb-8 text-gray-300">Olympic Athlete & Digital Developer</p>
          
          <div className="flex flex-col gap-4 items-center">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <IconMail size={24} />
              <span>your.email@example.com</span>
            </a>
            
            <a href="https://github.com/adrianruizar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <IconBrandGithub size={24} />
              <span>GitHub</span>
            </a>
            
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <IconBrandTwitter size={24} />
              <span>Twitter</span>
            </a>
            
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <IconWorld size={24} />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;