import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  import * as constants from 'redux/constants/app.constants';
  import {
    traerProductos,
  } from 'service/app.service';
  
  export function* traerProductosTodos() {
    try {
      const data = yield call(traerProductos);
      yield put({ type: constants.PRODUCT_GET_ALL_SUCCEEDED, data });
    } catch (error) {
      yield put({ type: constants.PRODUCT_GET_ALL_FAILED, error });
    }
  }

  export function* watchProducts() {
    yield all([
      takeLatest(constants.APP_INITIALIZE_REQUESTED, traerProductosTodos),
    ]);
  }