const formElements = document.querySelectorAll('.storage');
const stringValues = localStorage.getItem('data');
const parseValues = JSON.parse(stringValues);

[formElements[0].value, formElements[1].value, formElements[2].value] = parseValues;

for (let i = 0; i < formElements.length; i += 1) {
  formElements[i].addEventListener('keyup', () => {
    const values = [formElements[0].value, formElements[1].value, formElements[2].value];
    const stringifyValues = JSON.stringify(values);
    localStorage.setItem('data', stringifyValues);
  });
}
