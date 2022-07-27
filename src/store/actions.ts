import { HotelsSearchRequestPayload, HotelType } from './types';

export const HOTEL_LIST_REQUEST = 'HOTEL_LIST_REQUEST' as const;
export const HOTEL_LIST_START = 'HOTEL_LIST_START' as const;
export const HOTEL_LIST_SUCCESS = 'HOTEL_LIST_SUCCESS' as const;
export const HOTEL_LIST_ERROR = 'HOTEL_LIST_ERROR' as const;

export const ADD_FAVORITE_HOTEL_ACTION = 'ADD_FAVORITE_HOTEL_ACTION' as const;
export const REMOVE_FAVORITE_HOTEL_ACTION = 'REMOVE_FAVORITE_HOTEL_ACTION' as const;

export type HotelsSearchRequest = {
  type: typeof HOTEL_LIST_REQUEST
  payload: HotelsSearchRequestPayload
}

export type HotelsSearchStart = {
  type: typeof HOTEL_LIST_START
}

export type HotelsSearchSuccess = {
  type: typeof HOTEL_LIST_SUCCESS
  payload: HotelType[]
}

export type HotelsSearchError = {
  type: typeof HOTEL_LIST_ERROR
}

export type AddFavoriteHotel = {
  type: typeof ADD_FAVORITE_HOTEL_ACTION
  payload: HotelType
}

export type RemoveFavoriteHotel = {
  type: typeof REMOVE_FAVORITE_HOTEL_ACTION
  payload: HotelType[]
}

export const addFavoriteHotel = (payload: HotelType) => ({
  type: ADD_FAVORITE_HOTEL_ACTION,
  payload,
});

export const removeFavoriteHotel = (payload: HotelType[]) => ({
  type: REMOVE_FAVORITE_HOTEL_ACTION,
  payload,
});

export const getHotelsList = (payload: HotelsSearchRequestPayload) => ({
  type: HOTEL_LIST_REQUEST,
  payload,
});

export const setHotelsList = (payload: HotelType[]) => ({
  type: HOTEL_LIST_SUCCESS,
  payload,
});
