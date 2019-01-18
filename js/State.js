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


  computeResult(equation) {
    let normalizedEquation = equation.replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/√(\d*\.?\d+)/g, 'Math.sqrt($1)').replace(/(\d)(M)/g, '$1*$2')
      .replace(/(\d*\.?\d+)%/g, e => parseFloat(e)/100)
    this.result = eval(normalizedEquation)
  }

  addDot() {
    if (!this.dotIsPresent) {
      this.input += '.'
      this.dotIsPresent = true
    }
  }

  addPercent() {
    if (this.input.length) {
      this.input += '%'
      this.computeResult(this.input)
    }
  }

  addNumber(number) {
    this.needInsertNumber = false
    this.input += number
    this.computeResult(this.input)
  }

  addOp(operator) {
    if (!this.needInsertNumber) {
      this.input += operator
      this.needInsertNumber = true
    }
  }
}

