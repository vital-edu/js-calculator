export default class Calculator {
  static computeResult(equation) {
    let normalizedEquation = equation.replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/√(\d*\.?\d+)/g, 'Math.sqrt($1)').replace(/(\d|%)(M)/g, '$1*$2')
      .replace(/(\d*\.?\d+)%/g, e => parseFloat(e)/100)

    try {
      return eval(normalizedEquation)
    } catch(err) {
      return 'Expressão inválida'
    }
  }
}
