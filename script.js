/*

FISRT LOGIC
*/

let buttons = document.querySelectorAll('.btn')

for (let button of buttons) {
  button.addEventListener('click', () => {
    if (button.classList.contains('decrease')) {
      value.innerText = parseInt(value.textContent) - 1
    } else if (button.classList.contains('reset')) {
      value.innerText = 0
    } else {
      value.innerText = parseInt(value.textContent) + 1
    }
  })
}

/*

SECOND LOGIC

let value = document.getElementById('value')

function decrease() {
  value.innerText = parseInt(value.textContent) - 1
}

function increase() {
  value.innerText = parseInt(value.textContent) + 1
}

function reset() {
  value.innerText = 0
}
*/
