// Event listener for the  input areas of the form to turn green
document.addEventListener('DOMContentLoaded', function () {
  const inputAreas = document.querySelectorAll('.input-area')

  inputAreas.forEach((inputArea) => {
    inputArea.addEventListener('input', function () {
      inputArea.classList.add('active')
    })
  })
})

//Email invalid logic

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email-input')
  const emailError = document.getElementById('email-error')
  const form = document.querySelector('form')

  emailInput.addEventListener('input', function () {
    if (!isValidEmail(emailInput.value)) {
      emailInput.classList.add('invalid')
      emailError.textContent = 'Sorry, Invalid format here'
      emailError.style.color = '#FF6F5B'
      emailInput.style.borderBottomColor = '#FF6F5B'
    } else {
      emailInput.classList.remove('invalid')
      emailError.textContent = ''
      emailInput.style.borderBottomColor = '#4EE1A0'
    }
  })
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

//Functionality added to the <a> tag used as a submit button
// function submitForm() {
//   document.getElementById('submit-link').submit()
// }
