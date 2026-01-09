import React, { useEffect, useRef } from 'react';
import SkillsSection from './SkillsSection';
import './HomePage.css';

const HomePage = () => {
  const canvasRef = useRef(null);
  const auroraLayers = useRef([]);
  const stars = useRef([]);
  const mousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size with device pixel ratio
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create starfield
    const createStars = () => {
      stars.current = [];
      for (let i = 0; i < 200; i++) {
        stars.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.7,
          brightness: Math.random(),
          twinkleSpeed: 0.5 + Math.random() * 2,
          size: Math.random() * 1.5 + 0.5
        });
      }
    };

    // Create fewer, simpler particles
    const createParticles = () => {
      particles.current = [];
      for (let i = 0; i < 20; i++) {
        particles.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.5 + window.innerHeight * 0.25,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.1,
          life: Math.random(),
          maxLife: 1,
          size: Math.random() * 1.5 + 0.5,
          color: Math.floor(Math.random() * 3)
        });
      }
    };

    // Subtle noise function
    const smoothNoise = (x, y, t) => {
      const octave1 = Math.sin(x * 0.008 + t * 0.3) * Math.cos(y * 0.005 + t * 0.2);
      const octave2 = Math.sin(x * 0.015 + t * 0.5) * Math.cos(y * 0.01 + t * 0.4) * 0.5;
      
      return octave1 + octave2;
    };

    // Create subtle aurora layers
    const createAurora = () => {
      const layerCount = 3;
      auroraLayers.current = [];
      
      const auroraColors = [
        { r: 100, g: 255, b: 150, name: 'green' },    // Soft green
        { r: 120, g: 180, b: 255, name: 'blue' },     // Gentle blue
        { r: 200, g: 150, b: 255, name: 'purple' }    // Light purple
      ];

      for (let i = 0; i < layerCount; i++) {
        const pointCount = 40;
        const color = auroraColors[i % auroraColors.length];
        const baseY = window.innerHeight * (0.25 + i * 0.15);
        
        auroraLayers.current.push({
          points: Array.from({ length: pointCount }, (_, j) => ({
            x: (window.innerWidth / (pointCount - 1)) * j,
            baseY: baseY,
            y: baseY,
            amplitude: 30 + Math.random() * 40,
            frequency: 0.003 + Math.random() * 0.002,
            phase: Math.random() * Math.PI * 2,
            verticalWave: 0.3 + Math.random() * 0.4
          })),
          color: color,
          opacity: 0.03 + Math.random() * 0.04,
          speed: 0.15 + Math.random() * 0.25,
          offset: Math.random() * 1000,
          height: 100 + Math.random() * 80,
          shimmerSpeed: 0.3 + Math.random() * 0.7,
          layer: i,
          flowDirection: Math.random() > 0.5 ? 1 : -1,
          breathe: Math.random() * Math.PI * 2
        });
      }
    };

    createStars();
    createAurora();
    createParticles();

    // Draw gradient background
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, '#0a0a2e');
      gradient.addColorStop(0.3, '#16213e');
      gradient.addColorStop(0.6, '#1a1a3a');
      gradient.addColorStop(0.8, '#0f0f2a');
      gradient.addColorStop(1, '#000511');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    // Draw stars with better twinkling
    const drawStars = (currentTime) => {
      ctx.save();
      stars.current.forEach(star => {
        const twinkle = Math.sin(currentTime * 0.001 * star.twinkleSpeed) * 0.4 + 0.6;
        const opacity = star.brightness * twinkle * 0.9 + 0.1;
        
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#ffffff';
        
        // Add slight glow to brighter stars
        if (star.brightness > 0.8) {
          ctx.shadowBlur = 2;
          ctx.shadowColor = '#ffffff';
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });
      ctx.restore();
    };

    // Gentle aurora rendering
    const drawAuroraLayer = (layer, currentTime) => {
      const t = currentTime * 0.001 * layer.speed;
      const breatheEffect = Math.sin(currentTime * 0.0008 + layer.breathe) * 0.2 + 0.8;
      
      // Update points with gentle wave motion
      layer.points.forEach((point, i) => {
        const x = point.x;
        const flowOffset = t * layer.flowDirection * 30;
        
        // Gentle wave motion
        const primaryWave = Math.sin((x + flowOffset) * point.frequency + t + point.phase) * point.amplitude;
        const secondaryWave = smoothNoise(x + flowOffset, currentTime, t * 0.3) * point.amplitude * 0.3;
        
        // Subtle mouse influence
        const mouseDistance = Math.sqrt(Math.pow(x - mousePosition.current.x, 2) + Math.pow(point.baseY - mousePosition.current.y, 2));
        const mouseInfluence = Math.exp(-mouseDistance / 300) * Math.sin(t * 2 + i * 0.2) * 15;
        
        // Gentle vertical flow
        const verticalFlow = Math.sin(t * 0.6 + i * 0.08) * point.verticalWave * 15 * breatheEffect;
        
        point.y = point.baseY + primaryWave + secondaryWave + mouseInfluence + verticalFlow;
      });

      // Simple, clean rendering
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      const shimmer = Math.sin(t * layer.shimmerSpeed + layer.layer * 0.7) * 0.3 + 0.7;
      const opacity = layer.opacity * shimmer * breatheEffect;
      
      // Create smooth gradient
      ctx.beginPath();
      ctx.moveTo(layer.points[0].x, layer.points[0].y);
      
      // Simple smooth line
      for (let i = 1; i < layer.points.length - 1; i++) {
        const p1 = layer.points[i];
        const p2 = layer.points[i + 1];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        
        ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
      }
      
      // Complete the shape
      const lastPoint = layer.points[layer.points.length - 1];
      ctx.lineTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(lastPoint.x, lastPoint.y + layer.height);
      ctx.lineTo(layer.points[0].x, layer.points[0].y + layer.height);
      ctx.closePath();
      
      // Soft gradient fill
      const gradient = ctx.createLinearGradient(0, layer.points[0].y, 0, layer.points[0].y + layer.height);
      const { r, g, b } = layer.color;
      
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
      gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity * 0.7})`);
      gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    // Draw subtle floating particles
    const drawParticles = (currentTime) => {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      const colors = [
        'rgba(100, 255, 150, 0.2)',
        'rgba(120, 180, 255, 0.2)',
        'rgba(200, 150, 255, 0.2)'
      ];
      
      particles.current.forEach((particle, i) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.003;
        
        // Add gentle aurora influence
        const auroraInfluence = smoothNoise(particle.x, particle.y, currentTime * 0.001) * 0.2;
        particle.vx += auroraInfluence * 0.05;
        particle.vy += auroraInfluence * 0.02;
        
        // Boundary wrapping
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < window.innerHeight * 0.25) particle.y = window.innerHeight * 0.75;
        if (particle.y > window.innerHeight * 0.75) particle.y = window.innerHeight * 0.25;
        
        // Reset if life depleted
        if (particle.life <= 0) {
          particle.life = 1;
          particle.x = Math.random() * window.innerWidth;
          particle.y = Math.random() * window.innerHeight * 0.5 + window.innerHeight * 0.25;
        }
        
        // Draw particle
        ctx.globalAlpha = particle.life * 0.3;
        ctx.fillStyle = colors[particle.color];
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.restore();
    };

    // Main animation loop
    const animate = (currentTime) => {
      drawBackground();
      drawStars(currentTime);
      
      // Draw aurora layers from back to front
      auroraLayers.current
        .sort((a, b) => a.layer - b.layer)
        .forEach(layer => drawAuroraLayer(layer, currentTime));
      
      drawParticles(currentTime);
      
      // Add very subtle atmospheric glow
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = 0.02;
      
      const atmosphereGradient = ctx.createRadialGradient(
        window.innerWidth / 2, window.innerHeight * 0.4, 0,
        window.innerWidth / 2, window.innerHeight * 0.4, window.innerWidth * 0.6
      );
      atmosphereGradient.addColorStop(0, 'rgba(150, 200, 255, 0.3)');
      atmosphereGradient.addColorStop(0.7, 'rgba(150, 200, 255, 0.1)');
      atmosphereGradient.addColorStop(1, 'rgba(150, 200, 255, 0)');
      
      ctx.fillStyle = atmosphereGradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="homepage">
      <canvas 
        ref={canvasRef} 
        className="trail-canvas"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 0, 
          width: '100vw', 
          height: '100vh', 
          pointerEvents: 'none'
        }}
      />

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Am I coding a web
            <br />
            or <span className="italic-text">is the web coding me?</span>
          </h1>

          <div className="hero-intro">
            <div className="intro-left">
              <span className="intro-text">Hello, I am Salome Shioshvili</span>
              <div className="star-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.832 9.168H24l-7.418 5.665 2.832 9.168L12 18.335l-7.414 5.665 2.832-9.168L0 9.168h9.168L12 0z"/>
                </svg>
              </div>
              <span className="role-text">A Full Stack Developer</span>
            </div>
          </div>

          <div className="cta-section">
            <div className="social-links">
              <a href="https://github.com/salomeshioshvili" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/salome-shioshvili" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SkillsSection />
    </section>
  );
};

export default HomePage;