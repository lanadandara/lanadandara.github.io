//Validação se a pessoa está realmente logada
if ((localStorage.getItem('jwt') === null) || (localStorage.getItem('jwt') === '') || (localStorage.getItem('jwt') === undefined)) {
  location.href = 'index.html';
};


//API
const api = "https://ctd-todo-api.herokuapp.com/v1";
const route = {
  users: "/users",
  login: "/users/login",
  userInfo: "/users/getMe"
}
const url = api + route.userInfo

//variáveis
const btnEndSession = document.getElementById("closeApp");

//func para pegar dados do usuário
const getUser = (jwt) => {
  fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: jwt
    }
  })
  .then(function(response){
    return response.json(); 
  })
  .then(function(user){
    const userName = document.getElementById('userName');
    userName.innerHTML = `${user.firstName} ${user.lastName}`;
  })
}

//funcs de mostrar tarefas na tela
const terminadas = a => {
  const tarefasTerminadas = document.querySelector('.tarefas-terminadas')
  const tarefa = document.createElement('li');
  const notDone = document.createElement('div');
  const descricao = document.createElement('div');
  const id = document.createElement('p');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const data = new Date(a.createdAt)


  const pDescription = document.createTextNode(a.description);
  const pTime = document.createTextNode(data.toLocaleDateString('pt-BR'));
  const pId = document.createTextNode(a.id);

  p.appendChild(pDescription);
  id.appendChild(pId);
  p2.appendChild(pTime);
  descricao.appendChild(p);
  descricao.appendChild(p2);
  notDone.appendChild(descricao);
  tarefa.appendChild(notDone);
  tarefa.appendChild(descricao);

  descricao.classList.add("descricao");
  notDone.classList.add("done");
  p.classList.add("nome");
  p2.classList.add("timestamp");
  tarefa.classList.add("tarefa");
  id.classList.add('task-id')

  tarefasTerminadas.prepend(tarefa);
}
const naoTerminadas = a => {

  const skeleton = document.getElementById('skeleton')
  const tarefa = document.createElement('li');
  const notDone = document.createElement('div');
  const descricao = document.createElement('div');
  const id = document.createElement('p');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const data = new Date(a.createdAt)
  const pDescription = document.createTextNode(a.description);
  const pTime = document.createTextNode(data.toLocaleDateString('pt-BR'));
  const pId = document.createTextNode(a.id);

  p.appendChild(pDescription);
  id.appendChild(pId);
  p2.appendChild(pTime);
  descricao.appendChild(p);
  descricao.appendChild(p2);
  notDone.appendChild(descricao);
  tarefa.appendChild(notDone);

  tarefa.appendChild(descricao);

  descricao.classList.add("descricao");
  notDone.classList.add("not-done");
  p.classList.add("nome");
  p2.classList.add("timestamp");
  tarefa.classList.add("tarefa");
  notDone.setAttribute('id', a.id)

  skeleton.prepend(tarefa);
}

//func pegar tarefas do usuário
const getTasks = (jwt) => {
  fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
      headers: {
          method: 'GET',
          "Content-type": "application/json",
          authorization: jwt
      }
  })
  .then((resposta) => resposta.json())
  .then((tasks) => {
    tasks.forEach(a => {
      if (a.completed !== true) {
        naoTerminadas(a);
      } else {
        terminadas(a);
      }
    })
  })
}

//func ao carregar a página
window.onload = (event) => {
  getUser(localStorage.getItem('jwt'))
  getTasks(localStorage.getItem('jwt'))
};

//func criar nova tarefa
const makeTasks = (jwt) => {

  const inpuTask = document.getElementById('novaTarefa')

  const dataTask = {
      description: inpuTask.value,
      completed: false
  };

  fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
          authorization: jwt
      },
      body: JSON.stringify(dataTask)
  })
      .then(function (response) { return response.json() })
      .then(a => {
          naoTerminadas(a)
      })
}

const submit = document.getElementById('btn-send');
submit.onclick = a => {
    a.preventDefault();
    makeTasks(localStorage.getItem('jwt'));
}

//func marcar tarefa como completada
var target = ''
var idElement = ''
var classElement = ''

const completeTask = jwt => {

  if (classElement === 'not-done') {

        const id = idElement
        const api = 'https://ctd-todo-api.herokuapp.com/v1/tasks/'
        const url = api + id;
        const completed = {
            completed: true
        }

        document.getElementById(idElement).parentElement.remove();

        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: jwt
            },
            body: JSON.stringify(completed)
        })
            .then(function (a) { return a.json() })
            .then(function (a) {
                terminadas(a)

            });

    }
}

window.addEventListener("click", function (event) {
  if(event.target.className === 'not-done') {  
    target = event.target;
    idElement = target.id
    console.log(idElement)
    classElement = event.target.className;
    completeTask(localStorage.getItem('jwt'));
  }
});

//func finalizar sessão
btnEndSession.onclick = () => {
  localStorage.removeItem('jwt');
  location.href = 'index.html';
}