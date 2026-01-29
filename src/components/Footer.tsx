import { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="cta-section">
          <h2 className="cta-title">Ready to build the future of Bitcoin?</h2>
          <button className="btn btn-primary lg" onClick={() => setIsModalOpen(true)}>
            Submit Your dApp
          </button>
        </div>


      </div>

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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <iframe
              src="https://quasar-orbit-aa5.notion.site/ebd//2f6362757c9880e981c3d60161bec9f3"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        .site-footer {
          background: var(--color-accent-dark);
          padding: 4rem 1rem 2rem;
          color: white;
          margin-top: 4rem;
        }

        .cta-section {
            text-align: center;
            margin-bottom: 4rem;
            padding-bottom: 4rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .cta-title {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .btn.lg {
            font-size: 1.5rem;
            padding: 1rem 3rem;
        }
        
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: white;
            width: 95%;
            max-width: 1000px;
            height: 90vh;
            border-radius: var(--radius-md);
            position: relative;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 10;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .footer-bottom {
            padding-top: 2rem;
            border-top: none;
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
