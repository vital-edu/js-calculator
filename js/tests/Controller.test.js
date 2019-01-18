import Controller from '../Controller'
import State from '../State'
jest.mock('../State')


test('Initialization', () => {
  let controller = new Controller()

  expect(controller.state).toEqual(expect.anything())
})

test('createNewState', () => {
  let controller = new Controller()

  controller.state = 5
  controller.createNewState(10)

  expect(State).toHaveBeenCalledWith(10)
})

describe('execute', () => {
  beforeEach(() => {
    State.mockClear()
  });

  test('call addDot', () => {
    let controller = new Controller()
    controller.execute(',')

    let mockStateInstance = State.mock.instances[0]
    let mockAddDot = mockStateInstance.addDot

    expect(mockAddDot).toHaveBeenCalled()
  })

  test('call createNewState', () => {
    let controller = new Controller()
    controller.execute('=')

    expect(State).toHaveBeenCalled()
  })

  test('call createNewState', () => {
    let controller = new Controller()
    controller.execute('%')

    let mockStateInstance = State.mock.instances[0]
    let mockAddPercent = mockStateInstance.addPercent

    expect(mockAddPercent).toHaveBeenCalled()
  })

  test('call addSquareRoot', () => {
    let controller = new Controller()
    controller.execute('√')

    let mockStateInstance = State.mock.instances[0]
    let mockAddSquareRoot = mockStateInstance.addSquareRoot

    expect(mockAddSquareRoot).toHaveBeenCalled()
  })

  test('call resetState', () => {
    let controller = new Controller()
    controller.execute('')

    let mockStateInstance = State.mock.instances[0]
    let mockAddResetState = mockStateInstance.resetState

    expect(mockAddResetState).toHaveBeenCalled()
  })

  test('call resetState', () => {
    let controller = new Controller()
    let number = '2'
    controller.execute(number)

    let mockStateInstance = State.mock.instances[0]
    let mockAddNumber = mockStateInstance.addNumber

    expect(mockAddNumber).toHaveBeenCalledWith(number)
  })

  test('call addOp', () => {
    let controller = new Controller()
    let op = '+'
    controller.execute(op)

    let mockStateInstance = State.mock.instances[0]
    let mockAddOp = mockStateInstance.addOp

    expect(mockAddOp).toHaveBeenCalledWith(op)
  })
})
