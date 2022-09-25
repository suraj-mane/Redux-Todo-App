let allTodo = []
let addTodo = document.getElementById('addTodo');
let root = document.getElementById('display');
console.log(allTodo);

addTodo.addEventListener('click', () => {
    let todo = document.getElementById('todo').value;
    allTodo.push({name:todo, isSelecet:false});
    display();
})

// function Delete(i) {
//     allTodo.splice(i,1);
//     display(allTodo);
// }

function display(){
    root.innerHTML = "";
    let ul = document.createElement('ul');
    if(allTodo){
        allTodo.forEach((todo,index) => {
             let li = document.createElement('li');
             let button = document.createElement('button');
             let input = document.createElement('input');
             li.innerText = todo.name;
             button.innerText = "❌";
             input.type = "checkbox"
             todo.isSelecet ? input.checked = true : input.checked = false;
             button.addEventListener('click', () => {
                allTodo.splice(index,1);
                return display();
            })
            input.addEventListener('click', () => {
                allTodo.find((todo,i) => { i === index ? todo.isSelecet = true : todo.isSelecet= false});
                return allTodo, display();
            })
            li.appendChild(input,button);
            ul.appendChild(li);
        })
        root.appendChild(ul);
        console.log(allTodo)
    }
}

window.addEventListener("load", () => {
    display();
 });
