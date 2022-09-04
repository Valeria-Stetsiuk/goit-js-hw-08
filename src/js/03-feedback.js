import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');

const FEEDBACK_FORM = 'feedback-form-state';
