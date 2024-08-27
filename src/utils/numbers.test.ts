import { formatPrice, addCommas, toPersian } from './numbers'

describe('formatPrice', () => {
  it('should format a number with commas and convert to Persian', () => {
    const result = formatPrice('1234567')
    expect(result).toBe('۱,۲۳۴,۵۶۷')
  })

  it('should format a string number with commas and convert to Persian', () => {
    const result = formatPrice('9876543210')
    expect(result).toBe('۹,۸۷۶,۵۴۳,۲۱۰')
  })

  it('should handle small numbers without commas and convert to Persian', () => {
    const result = formatPrice('123')
    expect(result).toBe('۱۲۳')
  })

  it('should handle zero and convert to Persian', () => {
    const result = formatPrice('0')
    expect(result).toBe('۰')
  })

  it('should handle negative numbers correctly', () => {
    const result = formatPrice('-1234567')
    expect(result).toBe('-۱,۲۳۴,۵۶۷')
  })

  it('should handle numbers with decimals correctly', () => {
    const result = formatPrice('12345.678')
    expect(result).toBe('۱۲,۳۴۵.۶۷۸')
  })

  it('should handle a string with non-numeric characters', () => {
    const result = formatPrice('Price is 12345!')
    expect(result).toBe('Price is ۱۲,۳۴۵!')
  })
})

describe('addCommas', () => {
  it('should add commas to a number', () => {
    const result = addCommas(1000000)
    expect(result).toBe('1,000,000')
  })

  it('should add commas to a string number', () => {
    const result = addCommas('1000000')
    expect(result).toBe('1,000,000')
  })

  it('should not add commas to a small number', () => {
    const result = addCommas(123)
    expect(result).toBe('123')
  })

  it('should handle negative numbers correctly', () => {
    const result = addCommas(-1234567)
    expect(result).toBe('-1,234,567')
  })
})

describe('toPersian', () => {
  it('should convert numbers in a string to Persian', () => {
    const result = toPersian('1234567890')
    expect(result).toBe('۱۲۳۴۵۶۷۸۹۰')
  })

  it('should handle a string with mixed characters', () => {
    const result = toPersian('Price is 12345!')
    expect(result).toBe('Price is ۱۲۳۴۵!')
  })

  it('should handle a number input and convert to Persian', () => {
    const result = toPersian(6789)
    expect(result).toBe('۶۷۸۹')
  })

  it('should handle zero correctly', () => {
    const result = toPersian(0)
    expect(result).toBe('۰')
  })

  it('should handle negative numbers correctly', () => {
    const result = toPersian(-1234)
    expect(result).toBe('-۱۲۳۴')
  })
})
