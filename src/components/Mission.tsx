import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/animations.css';

const Mission: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">{t('mission.title')}</h2>
        <p className="lead-text animate-fade-in">
          {t('mission.lead')}
        </p>

        <div className="grid-layout">
          <div className="glass-card hover-lift">
            <h3>{t('mission.cards.vibeCode.title')}</h3>
            <p>{t('mission.cards.vibeCode.description')}</p>
          </div>

          <div className="glass-card hover-lift">
            <h3>{t('mission.cards.midlPower.title')}</h3>
            <p>{t('mission.cards.midlPower.description')}</p>
          </div>

          <div className="glass-card hover-lift">
            <h3>{t('mission.cards.makeItPop.title')}</h3>
            <p>{t('mission.cards.makeItPop.description')}</p>
          </div>
        </div>

        <div className="requirements-section">
          <h3>{t('mission.requirements.title')}</h3>
          <div className="roadmap">
            <div className="checkpoint">
              <div className="marker">1</div>
              <div className="content">
                <h4>{t('mission.requirements.steps.step1.title')}</h4>
                <p>{t('mission.requirements.steps.step1.description')}</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">2</div>
              <div className="content">
                <h4>{t('mission.requirements.steps.step2.title')}</h4>
                <p>{t('mission.requirements.steps.step2.description')}</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">3</div>
              <div className="content">
                <h4>{t('mission.requirements.steps.step3.title')}</h4>
                <p>{t('mission.requirements.steps.step3.description')}</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">4</div>
              <div className="content">
                <h4>{t('mission.requirements.steps.step4.title')}</h4>
                <p>{t('mission.requirements.steps.step4.description')}</p>
              </div>
            </div>
            <div className="checkpoint">
              <div className="marker">5</div>
              <div className="content">
                <h4>{t('mission.requirements.steps.step5.title')}</h4>
                <p>{t('mission.requirements.steps.step5.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="deliverables-section">
          <h3>{t('mission.deliverables.title')}</h3>
          <p className="subtitle">{t('mission.deliverables.subtitle')}</p>

          <div className="deliverables-grid">
            <div className="deliverable-card">
              <h4>{t('mission.deliverables.items.videoDemo.title')}</h4>
              <p>{t('mission.deliverables.items.videoDemo.description')}</p>
            </div>
            <div className="deliverable-card">
              <h4>{t('mission.deliverables.items.transactionProof.title')}</h4>
              <p>{t('mission.deliverables.items.transactionProof.description')}</p>
            </div>
            <div className="deliverable-card">
              <h4>{t('mission.deliverables.items.codeRepository.title')}</h4>
              <p>{t('mission.deliverables.items.codeRepository.description')}</p>
            </div>
            <div className="deliverable-card">
              <h4>{t('mission.deliverables.items.publicPost.title')}</h4>
              <p>{t('mission.deliverables.items.publicPost.description')}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mission-section {
          padding: var(--spacing-xl) var(--spacing-md);
          background: linear-gradient(to bottom, var(--color-bg-deep), var(--color-bg-charcoal));
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .lead-text {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 4rem;
          color: var(--color-text-muted);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .glass-card {
          background: var(--glass-bg);
          border: var(--glass-border);
          padding: 2rem;
          border-radius: var(--radius-md);
          backdrop-filter: blur(10px);
        }

        .glass-card h3 {
          color: var(--color-accent-primary);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .requirements-section {
          margin-bottom: 4rem;
        }

        .roadmap {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-top: 3rem;
            flex-wrap: wrap;
            gap: 2rem;
        }

        .roadmap::before {
            content: '';
            position: absolute;
            top: 25px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--color-border);
            z-index: 0;
            display: none; /* Hidden on mobile/wrap */
        }

        @media (min-width: 768px) {
            .roadmap::before { display: block; }
        }

        .checkpoint {
            position: relative;
            z-index: 1;
            flex: 1;
            min-width: 150px;
            text-align: center;
        }

        .marker {
            width: 50px;
            height: 50px;
            background: var(--color-bg-deep);
            border: 2px solid var(--color-accent-primary);
            color: var(--color-accent-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 1.2rem;
            margin: 0 auto 1rem;
            box-shadow: 0 0 15px rgba(247, 147, 26, 0.2);
        }

        .checkpoint h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--color-text-main);
        }

        .checkpoint p {
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }

        .deliverables-section {
            background: var(--color-bg-charcoal);
            padding: 3rem;
            border-radius: var(--radius-md);
        }

        .deliverables-section h3 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            text-align: center;
            color: var(--color-text-muted);
            margin-bottom: 2rem;
        }

        .deliverables-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .deliverable-card {
            background: var(--color-bg-deep);
            padding: 1.5rem;
            border-radius: var(--radius-sm);
            text-align: center;
            border: 1px solid var(--color-border);
        }

        .deliverable-card h4 {
            color: var(--color-accent-primary);
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
        }

        .deliverable-card .icon {
            font-size: 2rem;
            display: block;
            margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Mission;
