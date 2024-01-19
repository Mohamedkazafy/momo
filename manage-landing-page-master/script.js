let check = document.getElementById("mail")
let btn = document.getElementById("btn")
let err = document.getElementById("error")
btn.addEventListener('click',function(){
    if(check.value = "" || !check.value.includes("@"||".com")){
        err.innerText = "enter vaild email"
        err.style.color = "red"
    }
})
function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}
