// 2. Obtendo elementos com seletores CSS
const nomeUsuario = document.querySelector('header .avatar-content div');
nomeUsuario.innerHTML = '<strong>Nome Usuário</strong>';

// 3. Obtendo input com um name específico através do seletor CSS
// const primeiroNomeInput = document.querySelector('.form-auth input[name="name"]');

// 4. Obtendo input selecionando pela propriedade name
const primeiroNomeInput = document.getElementsByName('name')[0];
primeiroNomeInput.placeholder = 'Digite o primeiro nome';


// Exercício II
// 1. Alterando a borda dos inputs do formulário de cadastro
const inputs = document.querySelectorAll('.form-auth input');
inputs.forEach(input => {
  input.style.borderRadius = '.2rem';
})

// 2. Alterando posicionamento dos inputs
const formAuth = document.querySelector('.form-auth');
formAuth.style.display = 'flex'
formAuth.style.flexDirection = 'column'

// 3. selecionando o body diretamente para alterar a cor de fundo.
document.body.style.backgroundColor = '#fafafa'