import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const FEEDBACK_FORM = 'feedback-form-state';

const formData = {};

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function saveData() {
  const saveMessage = localStorage.getItem(FEEDBACK_FORM);
  if (saveMessage) {
    const { email, message } = JSON.parse(saveMessage);
    input.value = email;
    message.value = message;
  }
}






