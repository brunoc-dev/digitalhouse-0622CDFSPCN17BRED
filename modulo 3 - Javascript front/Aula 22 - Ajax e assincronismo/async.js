const meuNome = 'asdfas'
const promise = new Promise((resolve, reject) => {
  if (meuNome != 'Bruno') {
    return 'Xabú';
  } else {
    return 'Foi!'
  }
})
  .then(response => console.log(response))
  .catch(error => console.log(error))

console.log(promise)