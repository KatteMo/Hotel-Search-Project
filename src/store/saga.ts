import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import moment from 'moment';
import api from '../api/api';
import {
  HotelsSearchRequest, HOTEL_LIST_ERROR, HOTEL_LIST_REQUEST, HOTEL_LIST_START, HOTEL_LIST_SUCCESS,
} from './actions';

export function* hotelsListSaga({ payload }: HotelsSearchRequest): Generator<{}> {
  yield put({
    type: HOTEL_LIST_START,
  });
  try {
    const { city, checkIn, daysAmount } = payload;
    const checkInFormate = moment(checkIn).format('YYYY-MM-DD');
    const checkOut = moment(checkIn).add(daysAmount, 'days').format('YYYY-MM-DD');
    const { data }: any = yield call(api.getHotelsList, city, checkInFormate, checkOut);

    yield put({
      type: HOTEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    console.log('Error: ', error);
    yield put({
      type: HOTEL_LIST_ERROR,
    });
  }
}

export default function* rootSaga() {
  yield* [
    takeEvery(HOTEL_LIST_REQUEST, hotelsListSaga),
  ];
}
