import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');
const FEEDBACK_FORM = 'feedback-form-state';
const formData = {};
saveData();

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput() {
  formData.email = input.value;
  formData.message = textareaMessage.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
  console.log(formData);
}

function saveData() {
  const savedData = localStorage.getItem(FEEDBACK_FORM);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    input.value = email;
    textareaMessage.value = message;
  }
}
