export default class State {
  constructor(result = '') {
    this.input = ''
    this.result = result
    this.operating = false
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

  addNumber(number) {
    this.needInsertNumber = false
    this.input += number
    this.result = eval(this.input)
  }

  addOp(operator) {
    if (!this.needInsertNumber) {
      this.input += operator
      this.needInsertNumber = true
    }
  }
}

