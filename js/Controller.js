import State from './State.js'
import { isNumber } from './Helper.js'

export default class Controller {
  constructor() {
    this.createNewState()
  }

  createNewState(result) {
    this.state = new State(result)
  }

  execute(command) {
    if (command === ',') {
      this.state.addDot()
    } else if (command === '=') {
      this.createNewState(this.state.result)
    } else if (command === '%') {
      this.state.addPercent()
    } else if (command === '√') {
      this.state.addSquareRoot()
    } else if (command === 'CE') {
      this.state.resetState()
    } else if (isNumber(command)) {
      this.state.addNumber(command)
    } else {
      this.state.addOp(command)
    }

    return {
      input: this.state.input,
      result: this.state.result,
    }
  }
}

