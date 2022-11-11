let hamburger = document.querySelector(".hamburger")
let navigation = document.querySelector(".navigation")

hamburger.onclick = () => {
    if(navigation.style.transform == "translateY(-150%)"){
        navigation.style.transform = "translateY(-50%)"
    } else {
        navigation.style.transform = "translateY(-150%)"
    }
}
