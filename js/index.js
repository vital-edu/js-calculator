import Store from './Store.js'

const calculator = document.querySelector('#calculator')
const resultScreen = calculator.querySelector('#result')
const inputScreen = calculator.querySelector('#input')
const buttons = calculator.querySelectorAll('button')

let store = new Store()

buttons.forEach((btn) => {
  btn.onclick = function (e) {
    let btnValue = btn.innerHTML

    let response = store.execute(btnValue)

    inputScreen.innerHTML = response.input
    resultScreen.innerHTML = response.result
  }
})
