const emailLogin = document.getElementById('inputEmail');
const passwordLogin = document.getElementById('inputPassword');
const api = "https://ctd-todo-api.herokuapp.com/v1";
const loadingDiv = document.querySelector('.loading');
const loading = document.getElementById('loading-container');
const button = document.getElementById('btnSubmit');



var animation = () => {
    loading.classList.add('loading-box')
    loadingDiv.hidden = '';
    button.classList.add('button-loading')
    emailLogin.setAttribute('disabled', true);
    passwordLogin.setAttribute('disabled', true);
}

var cleanAnimation = () => {
    loading.classList.remove('loading-box')
    loadingDiv.hidden = 'hidden';
    button.classList.remove('button-loading')
    emailLogin.removeAttribute('disabled');
    passwordLogin.removeAttribute('disabled');
}

export { animation, cleanAnimation }