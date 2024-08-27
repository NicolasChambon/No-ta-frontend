import { Link, NavLink } from 'react-router-dom';

import './MenuNav.scss';

const MenuNav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="MenuNav">
      <ul className="MenuNav-list">
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('identity')}
          >
            Identité
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('dates')}
          >
            Concerts
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <NavLink className="MenuNav-list-item-link" to="/news">
            Actualités
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
