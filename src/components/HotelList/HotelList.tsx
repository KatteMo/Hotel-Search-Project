import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { getHotelsList } from '../../store/actions';
import { hotelListSelector, hotelsSearchSelector, isLoadingSelector } from '../../store/selectors';
import HotelCard from '../HotelCard/HotelCard';
import './HotelList.css';

const HotelsList = () => {
  const dispatch = useDispatch();
  const hotelList = useSelector(hotelListSelector);
  const hotelsSearch = useSelector(hotelsSearchSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getHotelsList({ city: 'Москва', checkIn: moment(new Date()).format('DD MMMM, YYYY'), daysAmount: 1 }));
  }, []);

  if (isLoading) return (<div className="hotels-list__preloader"><ClipLoader size={45} /></div>);

  return (
    <>
      {hotelList.map((hotel) => (
        <HotelCard
          key={hotel.hotelId}
          hotelId={hotel.hotelId}
          hotelName={hotel.hotelName}
          stars={hotel.stars}
          priceAvg={hotel.priceAvg}
          checkIn={hotelsSearch.checkIn}
          daysAmount={hotelsSearch.daysAmount}
        />
      ))}
    </>
  );
};

export default HotelsList;
