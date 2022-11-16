window.addEventListener('load', function () {
  const form = document.querySelector('main form.form-auth');
  const inputList = document.querySelectorAll('main form.form-auth input');
  let hasErrors = false;
  let hasFormErrors = false;

  const removeErrors = function (errorType) {
    if (errorType === 'form') {
      hasFormErrors = false;
    } else {
      hasErrors = false;
    }

    const errorSpans = document.querySelectorAll('main form.form-auth span.error');
    errorSpans.forEach(span => span.remove());
  };

  const createError = function (input, mensagem, errorType) {
    if (errorType === 'form') {
      hasFormErrors = true;
    } else {
      hasErrors = true;
    }

    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error');
    errorSpan.innerText = mensagem;
    input.insertAdjacentElement('afterend', errorSpan);
  };

  form.addEventListener('submit', function (event) {
    // Validar campos obrigatórios
    event.preventDefault();
    removeErrors('form');

    inputList.forEach(input => {
      if (!input.value) {
        createError(input, 'Campo Obrigatório', 'form');
      }
    });

    if (!hasErrors && !hasFormErrors) {
      this.submit();
    }
  });

  const validateEmail = function (input) {
    const { value } = input;
    if (value.includes('@') && value.includes('.')) {
      return
    } else {
      createError(input, 'O campo deve conter @ e .', 'input');
    }
  };

  const validateLength = function (input, min, max) {
    const { value } = input;

    if (value.length >= min && value.length < max) {
      return
    } else {
      createError(input, `O campo deve ter entre ${min} e ${max} caracteres`, 'input');
    }
  }

  const validateDate = function (input, min, max) {
    const { value } = input;
    const ano = value.split('-')[0];
    const idade = new Date().getFullYear() - parseInt(ano);
    if (idade >= min && idade < max) {
      return
    } else {
      createError(input, `A idade deve ser entre ${min} e ${max} anos`, 'input');
    }
  }

  inputList.forEach(input => {
    input.addEventListener('change', function () {
      removeErrors('input');

      switch (input.name) {
        case 'email':
          validateLength(input, 10, 180);
          validateEmail(input);
          break;

        case 'name':
          validateLength(input, 2, 80);
          break;

        case 'surname':
          validateLength(input, 2, 100);
          break;

        case 'username':
          validateLength(input, 10, 15);
          break;

        case 'password':
          validateLength(input, 8, 100);
          break;

        case 'date':
          validateDate(input, 16, 120);
          break;

        default:
          break;
      }
    });
  });
});