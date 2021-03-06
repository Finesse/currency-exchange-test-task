import { currencyAmountPrecision } from '../constants';
import { ExchangeRatesBase } from '../types';

// Works with precision defined in the constants file
// Returns null when the pair can't be converted
export default function convert(
  { baseCurrency, rates }: ExchangeRatesBase,
  value: number,
  fromCurrency: string,
  toCurrency: string,
  precision: number = currencyAmountPrecision
): number | null {
  if (
    fromCurrency !== baseCurrency && !rates.hasOwnProperty(fromCurrency) ||
    toCurrency !== baseCurrency && !rates.hasOwnProperty(toCurrency)
  ) {
    return null;
  }

  const baseToFromRatio = fromCurrency === baseCurrency ? 1 : rates[fromCurrency];
  const baseToToRatio = toCurrency === baseCurrency ? 1 : rates[toCurrency];

  if (baseToFromRatio === 0) {
    return null;
  }

  const convertedValue = value / baseToFromRatio * baseToToRatio;
  
  return Number(convertedValue.toFixed(precision));
}
