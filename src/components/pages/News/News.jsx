import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { scrollUpInstantly } from '../../../utils/scrollUtils';

import Header from '../../organisms/Header/Header';
import Post from './Post/Post';
import Footer from '../../organisms/Footer/Footer';

import picturePost2 from '../../../assets/images/Post-01-09-24.jpg';

import './News.scss';

const News = () => {
  const language = useSelector((state) => state.global.language);

  useEffect(() => {
    scrollUpInstantly();
  }, []);

  return (
    <>
      <Header />
      <main className="News">
        <h2 className="News-title">
          {language === 'fr' ? 'Actualités' : 'News'}
        </h2>
        <Post
          title={
            language === 'fr'
              ? 'Galotti Bandnacht, on arrive !'
              : 'Galotti Bandnacht, wir kommen !'
          }
          date={language === 'fr' ? '01.09.2024' : '1.9.2024'}
          content={
            language === 'fr'
              ? "Répétition générale aujourd'hui, il fait chaud sous le Hardbrücke ! On vous prépare un set aux petits oignons et même un featuring surprise 🙂!\nVenetz !"
              : 'Generalprobe heute. Es wird heisst unter der Hardbrücke ! Wir basteln euch ein mega cooles Set zusammen, sogar mit einem Überraschungs Featuring 🙂!\nVenetz !'
          }
          urlImage={picturePost2}
        />
        <Post
          title={language === 'fr' ? 'Merci Vertantzt !' : 'Danke, Vertantzt !'}
          date={language === 'fr' ? '22.07.2024' : '22.7.2024'}
          content={
            language === 'fr'
              ? "C'était incroyable ! Merci pour votre formidable écoute ! On était ravies de vous présenter Noïta 👏\nÀ l'année prochaine !?!"
              : "Es war unglaublich! Danke für's enthusiastische Zuhören! Wir haben uns mega gefreut, euch Noïta zu zeigen 👏\nBis nächstes Jahr !?"
          }
          urlImage="https://www.vertanzt.ch/wp-content/uploads/Gelaende-in-der-Daemmerung-1-1024x683.jpg"
        />
      </main>
      <Footer />
    </>
  );
};

export default News;
