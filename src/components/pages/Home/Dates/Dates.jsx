import { Link } from 'react-router-dom';

import './Dates.scss';

const Dates = () => {
  return (
    <section className="Dates" id="dates">
      <ul className="Dates-list">
        <h2 className="Dates-list-title">Prochaines dates</h2>
        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link first"
            to="https://www.galotti.ch/story/freitag-6-9-24-bandnacht/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">6 DEC. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Galotti Musikwerkstatt
              </div>
              <div className="Dates-list-item-link-location-city">Zürich</div>
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.galotti.ch/story/freitag-6-9-24-bandnacht/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">6 DEC. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Galotti Musikwerkstatt
              </div>
              <div className="Dates-list-item-link-location-city">Zürich</div>
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.galotti.ch/story/freitag-6-9-24-bandnacht/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">6 DEC. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Galotti Musikwerkstatt
              </div>
              <div className="Dates-list-item-link-location-city">Zürich</div>
            </div>
          </Link>
        </li>
      </ul>

      <ul className="Dates-list">
        <h2 className="Dates-list-title">Nous y étions</h2>
        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link first"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">20 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">20 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Dates;
