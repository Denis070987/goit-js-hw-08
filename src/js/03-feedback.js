import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle (onForm, 500));
form.addEventListener('submit', submitForm);



 let formArr = {};
function onForm(event) {
    formArr[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formArr)); 
}
    
function submitForm(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}



window.addEventListener('load', onSave)
function onSave() {
    const userMail = document.querySelector('.feedback-form input');
    const userMessage = document.querySelector('.feedback-form textarea');
    const keys = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (keys != null) {
        userMail.value = keys.email || '';
        userMessage.value = keys.message || '';
    }
    
}

