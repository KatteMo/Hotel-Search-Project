import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  SortDownImg, SortUpImg, SortDownGreyImg, SortUpGreyImg,
} from '../../etc/imagesImport';
import { favoriteHotelsSelector, hotelsSearchSelector } from '../../store/selectors';
import { HotelType } from '../../store/types';
import HotelCard from '../HotelCard/HotelCard';

import './FavoriteBlock.css';

const FavoriteBlock = () => {
  const [isDecreasingRating, setIsDecreasingRating] = useState(true);
  const [isDecreasingCost, setIsDecreasingCost] = useState(false);
  const [isLast, setIsLast] = useState('');
  const favoritesHolels: HotelType[] = useSelector(favoriteHotelsSelector);
  const hotelsSearch = useSelector(hotelsSearchSelector);

  const handleSortClick = (
    isDecreasing: boolean,
    setIsDecreasing: Dispatch<SetStateAction<boolean>>,
    sortType: string,
  ) => {
    setIsDecreasing(!isDecreasing);
    setIsLast(sortType);
  };

  if (isLast) {
    if (isLast === 'stars') {
      if (isDecreasingRating) {
        favoritesHolels.sort((a, b) => a.stars - b.stars);
      }
      if (!isDecreasingRating) {
        favoritesHolels.sort((a, b) => b.stars - a.stars);
      }
    } else {
      if (isDecreasingCost) {
        favoritesHolels.sort((a, b) => a.priceAvg - b.priceAvg);
      }
      if (!isDecreasingCost) {
        favoritesHolels.sort((a, b) => b.priceAvg - a.priceAvg);
      }
    }
  }

  return (
    <form className="favorites">
      <h1 className="favorites__title">Избранное</h1>

      <section className="favorites__sort-checkers">
        <button
          className="sort-switch"
          type="button"
          onClick={() => handleSortClick(isDecreasingRating, setIsDecreasingRating, 'stars')}
        >
          Рейтинг
          <aside className="sort-switch__arrows">
            <img src={!isLast || (isDecreasingRating && isLast) ? SortUpImg : SortUpGreyImg} alt="arrow" />
            <img src={!isLast || (!isDecreasingRating && isLast) ? SortDownImg : SortDownGreyImg} alt="arrow" />
          </aside>
        </button>

        <button
          className="sort-switch"
          type="button"
          onClick={() => handleSortClick(isDecreasingCost, setIsDecreasingCost, 'priceAvg')}
        >
          Цена
          <aside className="sort-switch__arrows">
            <img src={!isLast || (isDecreasingCost && isLast) ? SortUpImg : SortUpGreyImg} alt="arrow" />
            <img src={!isLast || (!isDecreasingCost && isLast) ? SortDownImg : SortDownGreyImg} alt="arrow" />
          </aside>
        </button>
      </section>

      <section className="favorites__hotels">
        { favoritesHolels.map((favorite: HotelType) => (
          <HotelCard
            key={favorite.hotelId}
            hotelId={favorite.hotelId}
            hotelName={favorite.hotelName}
            stars={favorite.stars}
            priceAvg={favorite.priceAvg}
            checkIn={hotelsSearch.checkIn}
            daysAmount={hotelsSearch.daysAmount}
            hidden
          />
        ))}
      </section>
    </form>
  );
};

export default FavoriteBlock;
