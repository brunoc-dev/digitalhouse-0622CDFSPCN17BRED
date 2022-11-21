function receberRetornoServidor () {
  return Promise.resolve({
    nome: 'Bruno',
    email: 'br@mail.com'
  })
}

function redirecionar () {
  const path = location.pathname.split('/').slice(0, 4)
  path.push('feed.html')
  location.href = location.origin + path.join('/');
}

const formulario = document.querySelector('.form-auth');

formulario.onsubmit = (event) => {
  event.preventDefault();

  receberRetornoServidor()
    .then(resultado => {
      localStorage.setItem('usuario', resultado.nome);
      redirecionar();
  })
}