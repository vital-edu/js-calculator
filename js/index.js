import Controller from './Controller.js'

const calculator = document.querySelector('#calculator')
const resultScreen = calculator.querySelector('#result')
const inputScreen = calculator.querySelector('#input')
const buttons = calculator.querySelectorAll('button')

let controller = new Controller()

buttons.forEach((btn) => {
  btn.onclick = function (e) {
    let btnValue = btn.innerHTML

    let response = controller.execute(btnValue)

    inputScreen.innerHTML = response.input
    resultScreen.innerHTML = response.result
  }
})
