
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");
const button = document.querySelector("#submit");
const form = document.querySelector("#form");

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('change', () => {
  if(emailIsValid(email.value) && textarea.value.length >= 20){
    button.removeAttribute('disabled')
  }else{
    button.setAttribute('disabled', 'disabled');
  }
});
const filterBox = document.querySelectorAll('.box');

console.log(filterBox);

document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});