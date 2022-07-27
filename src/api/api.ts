import axios from 'axios';

export default {
  getHotelsList(city: string, checkIn: string, checkOut: string) {
    return axios.get(
      `https://engine.hotellook.com/api/v2/cache.json?currency=rub&limit=20&location=${city}&checkIn=${checkIn}&checkOut=${checkOut}`,
    );
  },
};
