import React, { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import RussianCities from '../../etc/russian-cities.json';
import { getHotelsList } from '../../store/actions';
import { isLoadingSelector } from '../../store/selectors';
import './SearchFormBlock.css';

const style = {
  control: (base: any) => ({
    ...base,
    boxShadow: 'none',
  }),
};

const SearchFormBlock = () => {
  const { cities } = RussianCities;

  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const [city, setCity] = useState('Москва');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [days, setDays] = useState('1');

  const options = cities.map((location) => ({
    value: location,
    label: location,
  }));

  const searchHotelsHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const checkIn = moment(startDate).format('DD MMMM, YYYY');
    const daysAmount = +days;
    dispatch(getHotelsList({ city, checkIn, daysAmount }));
  };

  return (
    <form className="search-form">

      <section className="form-field search-form__location">
        <div className="search-form__subtitle">
          Локация
          <Select
            styles={style}
            options={options}
            onChange={(select) => setCity(select?.value || 'Москва')}
            placeholder={city}
          />
        </div>
      </section>

      <section className="form-field search-form__date">
        <div className="search-form__subtitle">
          Дата заселения
          <DatePicker
            className="data-picker"
            onChange={setStartDate}
            value={startDate}
            clearIcon={null}
            minDate={new Date()}
          />
        </div>
      </section>

      <section className="form-field search-form__days-count">
        <div className="search-form__subtitle">
          Количество дней
          <input
            className="search-form__input search-form__input-days"
            type="number"
            id="dateIn"
            placeholder="1"
            pattern="/[0-9]+/"
            onChange={(e) => {
              setDays(e.target.value);
              e.target.value.replace(/\D/, '');
            }}
          />
        </div>
      </section>

      <button className="search-form__button" disabled={isLoading} type="button" onClick={(e) => searchHotelsHandler(e)}>
        Найти
      </button>
    </form>
  );
};

export default SearchFormBlock;
