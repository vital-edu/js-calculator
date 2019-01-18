import Calculator from '../Calculator'

describe('computeResult', () => {
  test('complex equation', () => {
    let result = Calculator.computeResult('89×2√4^6%')

    expect(result).toBeCloseTo(185.56)
  })

  test('invalid equation', () => {
    let result = Calculator.computeResult('√36%')

    expect(result).toMatch('Expressão inválida')
  })
})
