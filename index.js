const addItemForm = document.querySelector('#addItemForm');
const foodList = document.querySelector('#foodList');

function makeItem(foodName){

    const newItem = document.createElement('li');

    newItem.innerHTML = `
        <div class="foodItem">
            <p class="foodName">${foodName}</p>
            <button class="btnDelete">Delete</button>
            <button class="btnPromote">Promote</button>
        </div>
    `;

    foodList.appendChild(newItem);
    return newItem;
}

function addItem(ev){
    ev.preventDefault();

    const foodName = addItemForm.foodName.value;
    const food = makeItem(foodName);

    food.querySelector('.btnDelete').addEventListener('click', deleteItem);
    food.querySelector('.btnPromote').addEventListener('click', promoteItem);
}

function promoteItem(){
    const foodItem = this.parentNode.querySelector('.foodName');

    if(foodItem.classList.contains('promoted')){
        foodItem.classList.remove('promoted');
    }
    else{
        foodItem.classList.add('promoted');
    }
}

function deleteItem(){
    const foodItem = this.parentNode.parentNode;
    foodList.removeChild(foodItem);
}

addItemForm.addEventListener('submit', addItem);