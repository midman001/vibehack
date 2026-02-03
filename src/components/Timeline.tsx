import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Trophy, CheckCircle } from 'lucide-react';

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title text-gradient">{t('timeline.title')}</h2>

        <div className="prize-banner hover-lift">
          <div className="prize-block">
            <Trophy size={48} className="icon-gold" />
            <div className="prize-content">
              <h3>{t('timeline.prizes.grand.title')}</h3>
              <p className="prize-amount">{t('timeline.prizes.grand.amount')}</p>
              <p>{t('timeline.prizes.grand.description')}</p>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="prize-block">
            <Trophy size={48} className="icon-silver" />
            <div className="prize-content">
              <h3>{t('timeline.prizes.community.title')}</h3>
              <p className="prize-amount">{t('timeline.prizes.community.amount')}</p>
              <p>{t('timeline.prizes.community.description')}</p>
            </div>
          </div>
        </div>

        <div className="split-layout">
          <div className="timeline-column">
            <h3>{t('timeline.sectionTitle')}</h3>
            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.kickoff.title')}</h4>
                <p>{t('timeline.phases.kickoff.date')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <Calendar className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.submission.title')}</h4>
                <p>{t('timeline.phases.submission.duration')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <CheckCircle className="icon-accent" />
              <div>
                <h4>{t('timeline.phases.voting.title')}</h4>
                <p>{t('timeline.phases.voting.duration')}</p>
              </div>
            </div>
          </div>

          <div className="evaluation-column">
            <h3>{t('timeline.evaluation.title')}</h3>
            <ul className="criteria-list">
              <li>
                <strong>{t('timeline.evaluation.phase1.title')}</strong>
                <p>{t('timeline.evaluation.phase1.description')}</p>
              </li>
              <li>
                <strong>{t('timeline.evaluation.phase2.title')}</strong>
                <p>{t('timeline.evaluation.phase2.description')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background: linear-gradient(to top, var(--color-canvas-bg), var(--color-bg-emphasized));
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .prize-banner {
          background: var(--color-bg-focus);
          border: 1px solid var(--color-border);
          padding: 2rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .prize-block {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            text-align: left;
        }
        
        .vertical-divider {
            width: 1px;
            height: 80px;
            background: var(--color-border);
            display: none;
        }

        @media (min-width: 768px) {
            .vertical-divider { display: block; }
        }

        .icon-gold {
          color: #FFD700;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
        }

        .icon-silver {
            color: #C0C0C0;
            filter: drop-shadow(0 0 10px rgba(192, 192, 192, 0.5));
        }

        .prize-amount {
          font-size: 2.5rem;
          font-weight: 500;
          color: var(--color-text-main);
          margin: 0;
          line-height: 1;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        @media (max-width: 768px) {
          .split-layout {
            grid-template-columns: 1fr;
          }
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .icon-accent {
          color: var(--color-accent-primary);
        }

        .criteria-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .criteria-list li {
          background: var(--color-bg-focus);
          box-shadow: none;
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Timeline;
