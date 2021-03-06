import { takeLeading, call, put, fork, delay } from 'redux-saga/effects';
import * as actions from './actions';
import { SagasDependencies, UpdateExchangeRatesAction } from './types';
import { ExchangeRatesBase } from '../types';
import { exchangeRatesUpdateInterval } from '../constants';

const updateExchangeRatesActionType: UpdateExchangeRatesAction['type'] = 'UPDATE_EXCHANGE_RATES';

export default function* appSaga(dependencies: SagasDependencies) {
  yield takeLeading(updateExchangeRatesActionType, updateExchangeRatesSaga, dependencies);
  yield fork(autoupdateExchangeRatesSaga);
}

export function* updateExchangeRatesSaga({ fetchExchangeRates }: SagasDependencies, _: UpdateExchangeRatesAction) {
  try {
    const rates: ExchangeRatesBase = yield call(fetchExchangeRates);
    const now: number = yield call([Date, 'now']);
    yield put(actions.updateExchangeRatesSuccess(rates, now));
  } catch (error) {
    yield put(actions.updateExchangeRatesFail(error.message));
  }
}

export function* autoupdateExchangeRatesSaga() {
  while (true) {
    yield put(actions.updateExchangeRates());
    yield delay(exchangeRatesUpdateInterval);
  }
}
