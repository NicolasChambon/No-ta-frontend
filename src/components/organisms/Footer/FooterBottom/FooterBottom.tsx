// Dependencies
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Types
import { RootState } from '../../../../reducers/indexReducer';

// Styles
import './FooterBottom.scss';

const FooterBottom = () => {
  const language = useSelector((state: RootState) => state.global.language);

  return (
    <div className="FooterBottom">
      <p className="FooterBottom-copyright">
        Copyright &copy; {new Date().getFullYear()} Noïta
      </p>
      <p className="FooterBottom-bar">|</p>
      <p className="FooterBottom-rights">
        {language === 'fr' ? 'Tous droits réservés' : 'Alle Rechte vorbehalten'}
      </p>
      <p className="FooterBottom-bar">|</p>
      <p className="FooterBottom-credits">
        {language === 'fr' ? 'Site réalisé par' : 'Website erstellt von'}{' '}
        <Link
          className="FooterBottom-credits-link"
          to="https://nicolaschambondev.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicolas Chambon
        </Link>
      </p>
    </div>
  );
};

export default FooterBottom;
