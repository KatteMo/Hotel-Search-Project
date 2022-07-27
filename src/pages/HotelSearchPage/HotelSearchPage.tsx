import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBlock from '../../components/FavoriteBlock/FavoriteBlock';
import HotelBlock from '../../components/HotelsBlock/HotelBlock';
import SearchFormBlock from '../../components/SearchFormBlock/SearchFormBlock';
import { LogoutImg } from '../../etc/imagesImport';
import './HotelSearchPage.css';

const HotelSearchPage = () => {
  const navigate = useNavigate();
  const login = localStorage.getItem('login');

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    if (!login) navigate('/');
  }, [login]);

  return (
    <div className="search-page">
      <header className="search-page__header">
        <h1 className="search-page__header__title">Simple Hotel Check</h1>
        <section className="search-page__header__logout-block">
          <label className="search-page__header__logout-block__label" htmlFor="logout-button">
            <button
              className="search-page__header__button"
              id="logout-button"
              type="button"
              onClick={logOut}
            >
              Выйти
            </button>
            <img
              className="search-page__header__button_img"
              src={LogoutImg}
              alt="logout"
            />
          </label>
        </section>
      </header>

      <main className="search-page__main">
        <div className="search-page__main-wrapper">
          <section>
            <article className="search-page__main__search-form">
              <SearchFormBlock />
            </article>
            <article className="search-page__main__favourites">
              <FavoriteBlock />
            </article>
          </section>
          <section className="search-page__main__hotels">
            <HotelBlock />
          </section>
        </div>
      </main>
    </div>
  );
};

export default HotelSearchPage;
