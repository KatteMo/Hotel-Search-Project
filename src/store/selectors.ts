import { RootState } from './types';

export const hotelsSearchSelector = (state: RootState) => state.hotelReducer.hotelsSearch;
export const hotelListSelector = (state: RootState) => state.hotelReducer.hotelList;
export const favoriteHotelsSelector = (state:RootState) => state.hotelReducer.favoriteList;

export const isLoadingSelector = (state: RootState) => state.hotelReducer.isLoading;
