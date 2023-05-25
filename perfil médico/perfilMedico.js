// botoes header
function clicou(obj){
    const collection = document.getElementsByClassName("navHeader")
    
    for(let i = 0; i < collection.length; i++){
    collection[i].classList.remove("selected");
    }
    obj.classList.add("selected");
    
    }
    