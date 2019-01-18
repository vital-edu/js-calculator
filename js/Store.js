import State from './State.js'

export default class Store {
  constructor() {
    this.states = []

    this.addNewState(new State)
  }

  addNewState(state) {
    this.states.push(state)
  }

  get currentState() {
    return this.states[this.states.length - 1]
  }

  execute(command) {
    if (command === ',') {
      this.currentState.addDot()
    } else if (command === '=') {
      this.currentState.finalResult()
    } else if (command === 'more') {

    } else if (command === 'del') {
      this.currentState.resetState()
    } else {
      if (!isNaN(parseFloat(command))) {
        this.currentState.addNumber(command)
      } else {
        this.currentState.addOp(command)
      }
    }
  }
}

