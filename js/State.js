import Calculator from './Calculator.js'

export default class State {
  constructor(result = '') {
    this.input = ''
    this.result = result
    this.dotIsPresent = false
    this.opIsLastChar = false
    this.needInsertNumber = true
  }

  resetState() {
    this.input = ''
    this.result = ''
    this.dotIsPresent = false
    this.opIsLastChar = false
    this.needInsertNumber = true
  }

  addDot() {
    if (!this.dotIsPresent) {
      this.input += '.'
      this.dotIsPresent = true
    }
  }

  addSquareRoot() {
    this.input += '√'
  }

  addPercent() {
    if (this.input.length) {
      this.input += '%'
      this.result = Calculator.computeResult(this.input)
    }
  }

  addNumber(number) {
    this.needInsertNumber = false
    this.input += number
    this.result = Calculator.computeResult(this.input)
  }

  addOp(operator) {
    if (!this.needInsertNumber) {
      this.input += operator
      this.needInsertNumber = true
    }
  }
}

