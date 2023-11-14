
const screen = document.getElementById('items');
const btnAdd = document.getElementById('add');
const btnRemove = document.getElementById('remove');

const itemsArray = [];

function addItem() {
    let title = document.getElementById('title').value;
    let time = document.getElementById('time').value;
    let isDone = document.getElementById('isDone').value;
    itemsArray.push({title: title, time: time, isDone: isDone}, ); //ternary operator
    screen.innerHTML = '';
    for(let item of itemsArray){
        screen.innerHTML += `${item.title} at ${ item.time}. ${item.isDone}. ${item.isDone === 'yes' ? '<span class="isdone done"></span>' : '<span class="isdone notDone"></span>' } <br>`;
    }
}

function removeItem(index){
    itemsArray.pop();
    screen.innerHTML = '';
    for(let item of itemsArray){
        screen.innerHTML += `${item.title} at ${item.time}. Done = ${item.isDone}<br>`;
    }
}

btnAdd.onclick = addItem;
btnRemove.onclick = removeItem;