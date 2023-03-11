const formElements = document.querySelectorAll('.storage');
const stringValues = localStorage.getItem('data');
const parseValues = JSON.parse(stringValues);

[formElements[0].value, formElements[1].value, formElements[2].value] = parseValues;
for (let i = 0; i < formElements.length; i += 1) {
  formElements[i].addEventListener('keyup', () => {
    const nameValue = formElements[0].value;
    const emailValue = formElements[1].value;
    const textAreaValue = formElements[2].value;
    const values = [nameValue, emailValue, textAreaValue];
    const stringifyValues = JSON.stringify(values);
    localStorage.setItem('data', stringifyValues);
  });
}