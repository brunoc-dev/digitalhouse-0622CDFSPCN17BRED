// Pegando os elementos HTML
let carousel = document.querySelector(".carousel")
let slides = document.querySelectorAll(".carousel>div")
let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")

// Criando clones da primeira e da última posição
let lastClone = slides[slides.length -1].cloneNode(true)
lastClone.id = "last-clone"
let firstClone = slides[0].cloneNode(true)
firstClone.id = "first-clone"
slides[slides.length -1].insertAdjacentElement('afterend', firstClone)
slides[0].insertAdjacentElement("beforebegin", lastClone)
// Reatribuindo a variavel slides pra considerar os clones
slides = document.querySelectorAll(".carousel>div")

// Inicializando o counter e a largura
let counter = 1
let width = slides[1].clientWidth

// Considerando que o carousel começa no primeiro item
carousel.style.transform = "translateX(" + -width * counter + "px)"

carousel.addEventListener("transitionend", () => {
    if (slides[counter].id == "first-clone"){
        carousel.style.transition = "none"
        counter = 1
        carousel.style.transform = "translateX(" + -width * counter + "px)"
    } else if (slides[counter].id == "last-clone"){
        carousel.style.transition = "none"
        counter = slides.length -2
        carousel.style.transform = "translateX(" + -width * counter + "px)"
    }
})


nextBtn.onclick = () => {
    if (counter >= slides.length -1) return
    counter++
    carousel.style.transition = ".5s"
    carousel.style.transform = "translateX(" + -width * counter + "px)"
}
prevBtn.onclick = () => {
    if (counter <= 0) return
    counter--
    carousel.style.transition = ".5s"
    carousel.style.transform = "translateX(" + -width * counter + "px)"
}

setInterval(nextBtn.onclick ,3000)