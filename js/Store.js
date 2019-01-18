import State from './State.js'
import { isNumber } from './Helper.js'

export default class Store {
  constructor() {
    this.states = []

    this.createNewState()
  }

  createNewState(result) {
    let newState = new State(result)

    this.states.push(newState)
  }

  get currentState() {
    return this.states[this.states.length - 1]
  }

  get lastState() {
    return this.states[this.states.length - 2]
  }

  execute(command) {
    if (command === ',') {
      this.currentState.addDot()
    } else if (command === '=') {
      if (this.currentState.input.length) {
        this.createNewState(this.currentState.result)
      }
    } else if (command === '%') {
      this.currentState.addPercent()
    } else if (command === '') {
      this.currentState.resetState()
    } else if (isNumber(command)) {
      this.currentState.addNumber(command)
    } else {
      this.currentState.addOp(command)
    }
    console.log(this.states.length)
    return {
      input: this.currentState.input,
      result: this.currentState.result,
    }
  }
}

