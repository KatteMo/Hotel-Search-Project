import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import correctDeclension from '../../etc/correctDeclension';
import {
  CircleImg, HouseImg,
  NoLikeImg, RedLikeImg,
} from '../../etc/imagesImport';
import { addFavoriteHotel, removeFavoriteHotel } from '../../store/actions';
import { favoriteHotelsSelector } from '../../store/selectors';
import { HotelType } from '../../store/types';

import './HotelCard.css';

type Params = {
  hotelId: number;
  hotelName: string;
  checkIn: string;
  daysAmount: number;
  stars: number;
  priceAvg: number;
  hidden?: boolean;
}

const HotelCard = ({
  hotelId, hotelName, checkIn, daysAmount, stars, priceAvg, hidden,
}: Params) => {
  const dispatch = useDispatch();
  const favoriteList: HotelType[] = useSelector(favoriteHotelsSelector);

  const isHotelInFavorites = favoriteList.find((hotel: HotelType) => hotel.hotelId === hotelId);

  const favoriteHandler = (favHotel: HotelType) => {
    if (isHotelInFavorites) {
      const newList = favoriteList.filter((hotel: HotelType) => hotel.hotelId !== favHotel.hotelId);
      dispatch(removeFavoriteHotel(newList));
    } else {
      dispatch(addFavoriteHotel(favHotel));
    }
  };

  return (
    <section className="hotel-card">

      {!hidden && (
      <div className="hotel-card__house-icon-wrapper">
        <section className="hotel-card__house-icon">
          <img className="hotel-card__house-icon-circle" src={CircleImg} alt="img" />
          <img className="hotel-card__house-icon-house" src={HouseImg} alt="img" />
        </section>
      </div>
      )}

      <div className="hotel-card__main-info">
        <section className="hotel-card__main-info__title-and-like">
          <h2 className="hotel-card__main-info__title-and-like__title">{hotelName}</h2>
          <div
            className="hotel-card__main-info__title-and-like__like_wrapper"
            role="button"
            tabIndex={0}
            onClick={() => {
              favoriteHandler({
                hotelId,
                hotelName,
                stars,
                priceAvg,
              });
            }}
            onKeyPress={() => {}}
          >
            <img className="hotel-card__main-info__title-and-like__like" src={isHotelInFavorites ? RedLikeImg : NoLikeImg} alt="img" />
          </div>
        </section>

        <section className="hotel-card__main-info__days-and-price">
          <article>
            <div className="hotel-card__main-info__days-and-price__date">
              {checkIn}
              <span className="hotel-card__main-info__days-and-price__date__dash"> — </span>
              {`${daysAmount} ${correctDeclension(daysAmount, {
                single: ' день',
                double: ' дня',
                plural: ' дней',
              })}`}
            </div>
            <div>
              <StarRatings
                rating={stars}
                numberOfStars={5}
                starSpacing="0"
                starRatedColor="#CDBC1E"
                starDimension="17px"
              />
            </div>
          </article>
          <section className="hotel-card__main-info__days-and-price__price">
            Price:
            <span className="hotel-card__main-info__days-and-price__price-number">
              {`${Math.round(priceAvg)} ₽`}
            </span>
          </section>
        </section>
      </div>
    </section>
  );
};

export default HotelCard;

HotelCard.defaultProps = {
  hidden: false,
};
