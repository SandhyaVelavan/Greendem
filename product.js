let search = document.querySelector("#search")
let container = document.querySelector("#container")
let h1List = document.querySelectorAll("#container div h1")


search.addEventListener("keyup",(event)=>{
    let input = event.target.value.toUpperCase()

    for(i=0;i<h1List.length;i++){
       if( h1List[i].textContent.toUpperCase().indexOf(input) < 0){
            h1List[i].parentElement.style.display="none"
       }
       else{
        h1List[i].parentElement.style.display="block"
       }
    }
})