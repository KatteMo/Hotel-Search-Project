export type HotelsSearchRequestPayload = {
    city: string;
    checkIn: string;
    daysAmount: number
}

export type HotelType = {
    hotelId: number
    hotelName: string
    priceAvg: number
    stars: number
}

export type RootState = {
    hotelReducer: {
      isLoading: boolean,
      hotelList: HotelType[];
      favoriteList: HotelType[];
      hotelsSearch:{
        city: string;
        checkIn: string;
        daysAmount: number;
      }
    };
  };
