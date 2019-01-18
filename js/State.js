export default class State {
  constructor() {
    this.input = ''
    this.result = ''
    this.operating = false
    this.dotIsPresent = false
    this.opIsLastChar = false
    this.needInsertNumber = true
  }

  resetState() {
    this.input = ''
    this.result = ''
    this.operating = false
    this.dotIsPresent = false
    this.opIsLastChar = false
    this.needInsertNumber = true
  }

  finalResult() {
    let finalResult = this.result
    this.resetState()
    this.result = finalResult
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

