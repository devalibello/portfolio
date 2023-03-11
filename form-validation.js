const myForm = document.querySelector('#form-first');
const emailInput = myForm.querySelector('.email-input');
const emailValue = emailInput.value
const invalidMessage = myForm.querySelector('.invalid-note')

const showMessage = (isError, message) => {
    validationMessage.classList.remove('d-none');
    validationMessage.textContent = message;
  };

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailValue === emailValue.toLowerCase()) {
      showMessage(false, 'Complete!');
      form.submit();
      return;
    }






// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(myForm)

//     if (emailValue === emailValue.toLowerCase()) {
//     //     invalidMessage.classList.add('show-note');
//         myForm.submit();
//         return true;
//     }
//     else {
//         // e.preventDefault();
//         invalidMessage.classList.remove('show-note');
//         return false;
//     }
// })
