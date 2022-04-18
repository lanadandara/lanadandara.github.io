

//API
const api = "https://ctd-todo-api.herokuapp.com/v1";
const route = {
  users: "/users",
  login: "/users/login"
}
const url = api + route.login

import { animation, cleanAnimation } from './utils.js'

//variáveis
const form = document.querySelector("form")
const emailInput = document.getElementById("inputEmail");
const passwordInput = document.getElementById("inputPassword"); 
const btnAccess = document.querySelector("button")
var account = '';

//func login
const loginFunc = () => {
  animation();

  const data = {
    email: emailInput.value,
    password: passwordInput.value
}

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(function(response){
    return response.json(); // pega a resposta como um objeto json
  })
  .then(function(token){
    localStorage.setItem('jwt', token.jwt);
    account = token;
  })
};


//mensagem erro login
const validateLogin = (errorMessage) => {
  if (errorMessage == "Contraseña incorrecta"){
    cleanAnimation();
    const small = document.createElement('small'); //criou elemento
    const passwordError = document.createTextNode("Senha incorreta"); //criou texto
    small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
    small.appendChild(passwordError); // colocou texto dentro do elemento
    passwordInput.classList.add('error'); //adicionou classe error no campo
    passwordInput.after(small); // adicionou o elemento small após o campo
  } else if(errorMessage == "El usuario no existe") {
    cleanAnimation();
      const small = document.createElement('small'); //criou elemento
      const emailError = document.createTextNode("Email não cadastrado"); //criou texto
      small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
      small.appendChild(emailError); // colocou texto dentro do elemento
      emailInput.classList.add('error'); //adicionou classe error no campo
      emailInput.after(small);
  } else if(errorMessage == "Error del servidor") {
    cleanAnimation();
      const small = document.createElement('small'); //criou elemento
      const serverError = document.createTextNode("Erro ao fazer login. Tente novamente "); //criou texto
      small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
      small.appendChild(serverError); // colocou texto dentro do elemento
      btnAccess.classList.add('error'); //adicionou classe error no campo
      btnAccess.after(small);
  }
};

//limpar erros dos campos
const cleanInput = (a) => {
  cleanAnimation();
  if (a.classList.contains('error')) {
    a.classList.remove('error')
    a.nextSibling.remove();
  }
};

//validar campos
const validateInput = (b) => {
  cleanAnimation();
  if (b.value == ""){
    //melhor jeito para mostrar mensagem de erro nos campos
    const small = document.createElement('small'); //criou elemento
    const errorMessage = document.createTextNode("Campo obrigatório"); //criou texto
    small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
    small.appendChild(errorMessage); // colocou texto dentro do elemento
    b.classList.add('error'); //adicionou classe error no campo
    b.after(small); // adicionou o elemento small após o campo
  }
};

//evento de tirar erros da tela quando o usuário escreve
emailInput.addEventListener("keyup", function(event) {
  cleanInput(this);
});
passwordInput.addEventListener("keyup", function(event) {
  cleanInput(this);
});

// evento de adicionar quando a pessoa sai do campo
emailInput.addEventListener("blur", function(event) {
  cleanInput(this);
  validateInput(this);
});

passwordInput.addEventListener("blur", function(event) {
  cleanInput(this);
  validateInput(this);
});

//evento no submit do form
form.addEventListener('submit', function(event) {
  event.preventDefault();
  cleanInput(emailInput);
  cleanInput(passwordInput);
  

  if ((emailInput.value === '') && (passwordInput.value === '')) {

    cleanAnimation();
    validateInput(emailInput);
    validateInput(passwordInput);


  } else {
    loginFunc();
   
    setTimeout(function () {
      if(account.jwt != undefined) {
        window.location.href = "/tarefas.html";
          
      } else {
        cleanAnimation();
        validateLogin(account);
        }
    }, 2000)
    }

});



