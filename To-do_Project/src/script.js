const clear = document.querySelector (".clear");
const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

function newItem (toDo){
    const position = "beforeend";
    const text = `<li class ="item"> 
                    <i class="far fa-circle" job="complete"></i>
                    <p class="text">${toDo}</p>
                    <i class="fas fa-trash-alt" job="delete"></i>
                </li>`
    list.insertAdjacentHTML(position,text)
}