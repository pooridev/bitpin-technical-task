import { pipe } from './pipe'

const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']

export function toPersian(value: string | number) {
  let formatted = String(value)
  for (let i = 0, numbersLen = englishNumbers.length; i < numbersLen; i++) {
    formatted = formatted.replace(new RegExp(englishNumbers[i], 'g'), persianNumbers[i])
  }
  return formatted
}

export const addCommas = (value: string | number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const formatPrice = pipe(addCommas, toPersian)
