/* SCROLL STICKY */

window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
})

/* NAVBAR TOGGLE */

const toggle = document.getElementById('nav-toggle')
const nav = document.getElementById('nav')

document.onclick = function(event){

    console.log(event.target)
    if ((event.target.id !== 'nav') && (event.target.id !== 'nav-toggle') && (event.target.id !== 'inner-nav'))
    {
        toggle.classList.remove('active')
        nav.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
}
