let sidenav = document.querySelector("#sidenav")
let menubar = document.querySelector("#menubar")
let exit = document.querySelector("#exit")

menubar.addEventListener("click",()=>{
    sidenav.style.marginRight = 0
})

exit.addEventListener("click",()=>{
    sidenav.style.marginRight = '-50%'
})


