import * as Types from './types';
import { ExchangeRatesBase } from '../types';

export function updateExchangeRates(): Types.UpdateExchangeRatesAction {
  return { type: 'UPDATE_EXCHANGE_RATES' };
}

export function updateExchangeRatesSuccess(
  exchangeRates: ExchangeRatesBase,
  date: number, // When the update was performed; unix ms
): Types.UpdateExchangeRatesSuccessAction {
  return { type: 'UPDATE_EXCHANGE_RATES_SUCCESS', exchangeRates, date };
}

export function updateExchangeRatesFail(error: string): Types.UpdateExchangeRatesFailAction {
  return { type: 'UPDATE_EXCHANGE_RATES_FAIL', error };
}

export function exchange(
  sellCurrency: string, 
  sellAmount: number | undefined, 
  buyCurrency: string,
  buyAmount: number | undefined
): Types.ExchangeAction {
  return { type: 'EXCHANGE', sellCurrency, sellAmount, buyCurrency, buyAmount };
}
