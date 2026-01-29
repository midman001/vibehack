import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Midl. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://x.com/midl_xyz" target="_blank" rel="noreferrer">𝕏</a>
            <a href="https://discord.com/invite/midl" target="_blank" rel="noreferrer">👾</a>
            <a href="https://t.me/midl_xyz" target="_blank" rel="noreferrer">✈️</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--color-accent-dark);
          padding: 2rem 1rem;
          color: white;
          margin-top: 0; /* Removed spacing */
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .footer-bottom {
            display: flex;
            justify-content: center;
        }

        .footer-bottom .container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
        }

        .footer-socials {
            display: flex;
            gap: 1.5rem;
        }

        .footer-socials a {
            font-size: 1.2rem;
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .footer-socials a:hover {
            opacity: 1;
        }

        @media (max-width: 600px) {
            .footer-bottom .container {
                flex-direction: column;
                gap: 1rem;
            }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
