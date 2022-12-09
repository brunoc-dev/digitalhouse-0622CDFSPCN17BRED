const containerCarrinho = document.querySelector(".container-carrinho")

const carrinho = JSON.parse(localStorage.getItem("carrinho"))

// Montando o carrinho
carrinho.forEach(item => {
        containerCarrinho.innerHTML += `
              <article class="${item.id}">
                <div class="thumb">
                  <img src="${item.imagem}" />
                </div>
                <div class="info">
                  <h3>${item.nome}</h3>
                  <P>${item.valor}</P>
                  <p>${item.descricao}</p>
                  <input type="number" value="${item.quantidade}">
                  <a href="#" class="btn" id="${item.id}">agendar</a>
                </div>
              </article>`
})

const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
    btn.onclick = () => {
        const containerItem = btn.parentElement.parentElement
        if (btn.id == containerItem.className){
            containerItem.remove()
            let novoCarrinho = carrinho.filter(item => item.id != btn.id)
            localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
        }
    }
})

