/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import {
  HotelsSearchRequest, HotelsSearchError, HotelsSearchStart,
  HotelsSearchSuccess, RemoveFavoriteHotel, AddFavoriteHotel,
  ADD_FAVORITE_HOTEL_ACTION, HOTEL_LIST_START,
  HOTEL_LIST_SUCCESS, REMOVE_FAVORITE_HOTEL_ACTION,
  HOTEL_LIST_REQUEST, HOTEL_LIST_ERROR,
} from './actions';

const initialState = {
  isLoading: false,
  hotelList: [],
  favoriteList: [],
  hotelsSearch: {},
};

export type HotelStateType = typeof initialState

function hotelReducer(state: HotelStateType = initialState, action: ReducerActions) {
  switch (action.type) {
    case HOTEL_LIST_REQUEST: {
      return {
        ...state,
        hotelsSearch: { ...action.payload },
      };
    }
    case HOTEL_LIST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case HOTEL_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hotelList: [...action.payload],
      };
    }
    case HOTEL_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_FAVORITE_HOTEL_ACTION: {
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    }
    case REMOVE_FAVORITE_HOTEL_ACTION: {
      return {
        ...state,
        favoriteList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export type ReducerActions =
  | HotelsSearchSuccess
  | HotelsSearchStart
  | HotelsSearchRequest
  | HotelsSearchError
  | AddFavoriteHotel
  | RemoveFavoriteHotel

const reducer = combineReducers({
  hotelReducer,
});

export default reducer;
