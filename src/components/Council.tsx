import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/animations.css';

const Council: React.FC = () => {
  const { t } = useTranslation();

  const members = ['member1', 'member2', 'member3', 'member4', 'member5'];

  return (
    <section id="council" className="council-section">
      <div className="council-container">
        <h2 className="council-title animate-fade-in">{t('council.title')}</h2>
        <p className="council-subtitle animate-fade-in">{t('council.subtitle')}</p>

        <p className="coming-soon-notice animate-fade-in">{t('council.comingSoon')}</p>

        <div className="council-grid">
          {members.map((member, index) => (
            <div key={member} className="council-tile animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="tile-image-wrapper">
                <img
                  src={`/council/council-${index + 1}.svg`}
                  alt={t(`council.members.${member}.name`)}
                  className="tile-image"
                />
              </div>
              <div className="tile-content">
                <h3 className="tile-name">{t(`council.members.${member}.name`)}</h3>
                <p className="tile-catchphrase">{t(`council.members.${member}.catchphrase`)}</p>
                <div className="tile-bio">
                  <p>{t(`council.members.${member}.bio.line1`)}</p>
                  <p>{t(`council.members.${member}.bio.line2`)}</p>
                  <p>{t(`council.members.${member}.bio.line3`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .council-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background: var(--color-canvas-bg);
        }

        .council-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .council-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
        }

        .council-subtitle {
          font-size: 1.25rem;
          text-align: center;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .coming-soon-notice {
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          font-style: italic;
          margin-bottom: 2.5rem;
        }

        .council-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .council-tile {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          text-align: center;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .council-tile:hover {
          opacity: 0.85;
          border-color: var(--color-accent-primary);
        }

        .tile-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          background: var(--color-bg-emphasized);
          border: 2px solid var(--color-border);
        }

        .tile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tile-name {
          font-size: 1.1rem;
          font-weight: var(--font-weight-medium);
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }

        .tile-catchphrase {
          font-style: italic;
          color: var(--color-accent-primary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .tile-bio {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .tile-bio p {
          margin: 0.25rem 0;
        }

        /* Responsive breakpoints */
        @media (max-width: 1200px) {
          .council-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .council-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .council-title {
            font-size: 2.25rem;
          }

          .council-subtitle {
            font-size: 1rem;
          }

          .coming-soon-banner {
            padding: 1rem 1.5rem;
          }

          .coming-soon-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .council-grid {
            grid-template-columns: 1fr;
          }

          .council-section {
            padding: var(--spacing-lg) var(--spacing-md);
          }

          .tile-image-wrapper {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Council;
