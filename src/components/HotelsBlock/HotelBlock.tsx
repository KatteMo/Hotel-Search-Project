import React from 'react';
import { useSelector } from 'react-redux';
import correctDeclension from '../../etc/correctDeclension';
import { VectorImg } from '../../etc/imagesImport';
import { favoriteHotelsSelector, hotelsSearchSelector } from '../../store/selectors';
import HotelsList from '../HotelList/HotelList';
import HotelsCarousel from '../HotelsCarousel/HotelsCarousel';

import './HotelBlock.css';

const HotelBlock = () => {
  const hotelsSearch = useSelector(hotelsSearchSelector);
  const favoritHotels = useSelector(favoriteHotelsSelector);

  return (
    <div className="hotels-block">
      <header className="hotels-block__header">
        <h2 className="hotels-block__header__title">
          Отели
          <img className="hotels-block__header__title__vector" src={VectorImg} alt="img" />
          {`${hotelsSearch.city || 'Москва'}`}
        </h2>
        <div className="hotels-block-container-date">{hotelsSearch.checkIn}</div>
      </header>
      <HotelsCarousel />
      <section className="hotels-block__fav-amount_wrapper">
        <article className="hotels-block__fav-amount">
          Добавлено в Избранное:
          <span className="hotels-block__fav-amount__number">{favoritHotels.length}</span>
          {correctDeclension(favoritHotels.length, {
            single: ' отель',
            double: ' отеля',
            plural: ' отелей',
          })}
        </article>
      </section>
      <section className="hotels-block__hotel-list">
        <HotelsList />
      </section>
    </div>
  );
};

export default HotelBlock;
