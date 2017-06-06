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
    foods.push(makeItem(foodName));
    console.log(foods);

}


addItemForm.addEventListener('submit', addItem);

