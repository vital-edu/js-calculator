import State from '../State.js'


test('initialize', () => {
  let state = new State()
  expect(state).toHaveProperty('input', '')
  expect(state).toHaveProperty('result', '')
  expect(state).toHaveProperty('dotIsPresent', false)
  expect(state).toHaveProperty('opIsLastChar', false)
  expect(state).toHaveProperty('needInsertNumber', true)
})

test('resetState', () => {
  let unmodifiedState = new State()
  let modifiedState = new State()

  modifiedState.input = 'new input'
  modifiedState.result = 'any'
  modifiedState.dotIsPresent = true
  modifiedState.opIsLastChar = true
  modifiedState.needInsertNumber = false

  expect(modifiedState).not.toMatchObject(unmodifiedState)

  modifiedState.resetState()

  expect(modifiedState).toMatchObject(unmodifiedState)
})

test('addNumber', () => {
  let state = new State()

  state.addNumber(2)
  expect(state).toHaveProperty('input', '2')
  expect(state).toHaveProperty('result', 2)
  expect(state).toHaveProperty('needInsertNumber', false)
})

describe('addDot', () => {
  test('add dot without number', () => {
    let state = new State()

    state.addDot()
    expect(state.input).toHaveLength(1)
    expect(state.result).toHaveLength(0)
  })

  test('add dot with number', () => {
    let state = new State()

    state.addNumber(2)
    state.addDot()
    state.addNumber(3)

    expect(state.result).toBeCloseTo(2.3)
  })

  test('add more than one dot in sequence', () => {
    let state = new State()

    state.addDot()
    state.addDot()

    expect(state.result).toHaveLength(0)
  })
})

test('addSquareRoot', () => {
  let state = new State()

  state.addSquareRoot()

  expect(state.input).toBe('√')
})

describe('addPercent', () => {
  test('add percent when input is empty', () => {
    let state = new State()

    state.addPercent()

    expect(state.input).toHaveLength(0)
  })

  test('add percent when input is not empty', () => {
    let state = new State()

    state.addNumber(5)
    state.addPercent()

    expect(state.input).toHaveLength(2)
    expect(state.result).toBeCloseTo(0.05)
  })
})

describe('addOp', () => {
  test('add operator as first input', () => {
    let state = new State()

    state.addOp('+')

    expect(state.input).toHaveLength(0)
  })

  test('add operator after another operator', () => {
    let state = new State()

    state.addNumber(5)
    state.addOp('+')
    state.addOp('+')

    expect(state.input).toHaveLength(2)
  })

  test('add operator between two numbers', () => {
    let state = new State()

    state.addNumber(5)
    state.addOp('+')
    state.addNumber(5)

    expect(state.input).toHaveLength(3)
    expect(state.result).toBeCloseTo(10)
  })
})
