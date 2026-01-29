import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import '../styles/animations.css';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) scale(1.1)`,
        }}
      >
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <nav className="navbar animate-fade-in">
        <div className="logo">Midl</div>
        <div className="social-links">
          <a href="https://x.com/midl_xyz" target="_blank" rel="noreferrer">𝕏</a>
          <a href="https://discord.com/invite/midl" target="_blank" rel="noreferrer">👾</a>
          <a href="https://t.me/midl_xyz" target="_blank" rel="noreferrer">✈️</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Sparkles size={16} className="icon-pulse" />
          <span>Midl VibeHack BTC</span>
        </div>

        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Building on Bitcoin <br />
          <span className="text-gradient">used to be hard.</span>
        </h1>

        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Not anymore. Welcome to the Midl Vibe Coding Contest.
          This isn’t your standard, sweaty hackathon, this is a playground.
        </p>

        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#mission" className="btn btn-primary hover-lift">
            Start Building <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xl) var(--spacing-md);
          overflow: hidden;
          text-align: center;
          background-color: var(--color-canvas-bg); /* Match global bg */
        }

        .hero-background {
          position: absolute;
          inset: -50px; /* Increased overscan for amplified parallax */
          z-index: 0;
          background-image: url("${heroBg}");
          background-size: cover;
          background-position: center;
          opacity: 0.6; /* Increased opacity for light mode */
          transition: transform 0.05s linear; /* Smoother, faster response */
        }

        .hero-background::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, var(--color-canvas-bg) 100%);
        }

        /* Legacy orbs for extra glow if needed, or hide them */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: var(--color-accent-primary);
          top: -10%;
          left: 20%;
          animation: float 6s ease-in-out infinite;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: var(--color-accent-primary); /* Changed to primary orange from secondary */
          bottom: -10%;
          right: 20%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .hero-content {
          max-width: 800px;
          z-index: 1;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--color-bg-focus);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          color: var(--color-accent-primary);
          font-weight: 600;
          margin-bottom: 24px;
          box-shadow: none; /* Flat design */
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .text-gradient {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--color-accent-primary);
          color: #000;
          box-shadow: none; /* Flat design */
        }
        .btn-primary:hover {
          background: #FFB04E; /* Lighter orange on hover */
          transform: translateY(-2px);
          box-shadow: none;
        }

        .btn-secondary {
          background: var(--color-bg-focus);
          border: 1px solid var(--color-border);
          color: var(--color-text-main);
          backdrop-filter: blur(0);
        }
        .btn-secondary:hover {
          background: var(--color-bg-emphasized);
          border-color: var(--color-border);
        }

        .icon-pulse {
          animation: glowPulse 2s infinite;
        }

        .navbar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: -1px;
            color: var(--color-text-main);
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-links a {
            font-size: 1.2rem;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        
        .social-links a:hover {
            opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;
