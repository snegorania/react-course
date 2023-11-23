import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("ru")}>Russian</button>
        <button onClick={() => i18n.changeLanguage("by")}>Belarusian</button>
        <p>
          {t('EDIT_MASSAGE')}
        </p>
        <p>{t('LOCALIZATION_MASSAGE')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('LEARN_REACT')}
        </a>
      </header>
    </div>
  );
}

export default App;
