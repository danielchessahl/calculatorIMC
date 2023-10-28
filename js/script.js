import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weigth')
const inputHeight = document.querySelector('#heigth')

/*3 maneiras de criar e atribuir função a um evento
    form.onsubmit = function () {}

    form.onsubmit = () => {}

    form.onsubmit = handleSubmit
    function handleSubmit() {}
*/

//Fechar a janela de erro ao digitar em qualquer um dos campos
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  
  const weightOrHeigthIsNotANumber = notANumber(weight) || notANumber(height)
  
  if (weightOrHeigthIsNotANumber){
    AlertError.open()
    return;
  }

  AlertError.close

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage (result) {
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()

}



