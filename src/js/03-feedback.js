import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle (onForm, 500));
form.addEventListener('submit', submitForm);


 (function fillForm() {
    const keys = JSON.parse(localStorage.getItem("feedback-form-state"));
    let userMail = document.querySelector('.feedback-form input');
    let userMessage = document.querySelector('.feedback-form textarea');
    if (keys != null) {
        userMail.value = keys.email;
        userMessage.value = keys.message;
    }
})()




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


