const addItemForm = document.querySelector('#addItemForm');
const foodList = document.querySelector('#foodList');

let foods = [];

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
   // foods.push(makeItem(foodName));

}

function deleteItem(){
    console.log(this.parentNode);
    console.log(this.parentNode.parentNode);
    const foodItem = this.parentNode.parentNode;
    foodList.removeChild(foodItem);

}

addItemForm.addEventListener('submit', addItem);