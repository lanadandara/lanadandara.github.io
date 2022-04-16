//variáveis
const signupForm = document.querySelector("form")
const signupName = document.getElementById("signupName");
const signupSurname = document.getElementById("signupSurname");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupRepeatPassword = document.getElementById("signupRepeatPassword");
const signupCreate = document.getElementById('btnCreate');
const loadingDiv = document.querySelector('.loading');
const loading = document.getElementById('loading-container');
var account = '';


var animation = () => {
  loading.classList.add('loading-box')
  loadingDiv.hidden = '';
  signupCreate.classList.add('button-loading')
  signupEmail.setAttribute('disabled', true);
  signupName.setAttribute('disabled', true);
  signupSurname.setAttribute('disabled', true);
  signupRepeatPassword.setAttribute('disabled', true);
  signupPassword.setAttribute('disabled', true)
  signupCreate.setAttribute('disabled', true);
}

var cleanAnimation = () => {
  loading.classList.remove('loading-box')
  loadingDiv.hidden = 'hidden';
  signupCreate.classList.remove('button-loading')
  signupEmail.removeAttribute('disabled');
  signupName.removeAttribute('disabled');
  signupSurname.removeAttribute('disabled');
  signupRepeatPassword.removeAttribute('disabled');
  signupPassword.removeAttribute('disabled');
  signupCreate.removeAttribute('disabled');
}


//API
const api = "https://ctd-todo-api.herokuapp.com/v1";
const route = {
  users: "/users",
  login: "/users/login"
}


//func cadastro
const signup = () => {
  animation();

  const data = {
    firstName: signupName.value,
    lastName: signupSurname.value,
    email: signupEmail.value,
    password: signupPassword.value
}

  fetch(api + route.users, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    
  })
  .then(function(response){
    return response.json();
  })
  .then(function(token){
  localStorage.setItem('jwt', token.jwt);
  account = token;
  })
};





//essas duas podiam estar no utils já que usamos em 2 paginas
//limpar erros dos campos
const cleanInput = (a) => {
  if (a.classList.contains('error')) {
    a.classList.remove('error')
    a.nextSibling.remove();
  }
};

//validar campos
const validateInput = (b) => {
  if (b.value == ""){
    const small = document.createElement('small'); //criou elemento
    const errorMessage = document.createTextNode("Campo obrigatório"); //criou texto
    small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
    small.appendChild(errorMessage); // colocou texto dentro do elemento
    b.classList.add('error'); //adicionou classe error no campo
    b.after(small); // adicionou o elemento small após o campo
  }
};


//validar email
const validateEmail = (c) => {
  if (!c.value.includes('@')){
    const small = document.createElement('small'); //criou elemento
    const errorEmail = document.createTextNode("O email precisa conter @"); //criou texto
    small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
    small.appendChild(errorEmail); // colocou texto dentro do elemento
    c.classList.add('error'); //adicionou classe error no campo
    c.after(small); // adicionou o elemento small após o campo
  }
};

//validar senha
const validatePassword = (d,e) => {
  if (d.value !== e.value){
    const small = document.createElement('small'); //criou elemento
    const errorPassword = document.createTextNode("As senhas não são iguais"); //criou texto
    small.classList.add('error-message'); //adicionar classe para limpar erro ao clicar novamente
    small.appendChild(errorPassword); // colocou texto dentro do elemento
    e.classList.add('error'); //adicionou classe error no campo
    e.after(small); // adicionou o elemento small após o campo
  }
};

//eventos de parar de mostrar erros
document.querySelectorAll('.fields').forEach(item => {
  item.addEventListener("keyup", event => {
    cleanInput(item);
  })
})

document.querySelectorAll('.fields').forEach(item => {
  item.addEventListener("blur", event => {
    cleanInput(item);
    validateInput(item);
  })
})



//evento no submit do form
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if ((signupName.value !== '') && (signupSurname.value !== '') &&(signupEmail.value !== '') && (signupPassword.value !== '') &&(signupRepeatPassword.value !== '')) {
    if ((signupPassword.value === signupRepeatPassword.value) && (signupEmail.value.includes('@'))) {
      signup();
      
      setTimeout(function () {
        console.log(account.jwt);
        if (account.jwt != undefined) {
          window.location.href = '/tarefas.html'
        }
    }, 2000);
    
    } else {
      validateEmail(signupEmail);
      validatePassword(signupPassword,signupRepeatPassword);
    }

  } else {
  
    validateInput(signupName);
    validateInput(signupSurname);
    validateInput(signupEmail);
    validateInput(signupPassword);
    validateInput(signupRepeatPassword);
  }
});
