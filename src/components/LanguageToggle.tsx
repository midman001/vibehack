import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <button
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <span className={i18n.language === 'en' ? 'active' : ''}>
          {t('languageToggle.en')}
        </span>
        <span className="separator">/</span>
        <span className={i18n.language === 'zh' ? 'active' : ''}>
          {t('languageToggle.zh')}
        </span>
      </button>

      <style>{`
        .language-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: 1px solid currentColor;
          border-radius: 100px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          color: currentColor;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .language-toggle:hover {
          opacity: 1;
        }

        .language-toggle span {
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }

        .language-toggle span.active {
          opacity: 1;
        }

        .language-toggle .separator {
          opacity: 0.3;
        }
      `}</style>
    </>
  );
};

export default LanguageToggle;
