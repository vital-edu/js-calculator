import { isNumber } from '../Helper'

describe('isNumber', () => {
  test('integer number', () => {
    expect(isNumber('2')).toBeTruthy()
  })

  test('float number', () => {
    expect(isNumber('.2')).toBeTruthy()
  })

  test('sign', () => {
    expect(isNumber('+')).toBeFalsy()
  })

  test('empty string', () => {
    expect(isNumber('')).toBeFalsy()
  })
})
