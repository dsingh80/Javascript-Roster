const JavascriptRoster = {

    foodItemsList: [],
    numFoods: 0,

    init: function(formSelector){
        //this.loadList();
        document.querySelector(formSelector).addEventListener('submit', this.addItem.bind(this));
        this.getFoodList = this.getFoodList.bind(this);
    },

    getFoodList: function(){
        return this.foodItemsList;
    },

    addItem: function(ev){
        ev.preventDefault();

        const foodName = addItemForm.foodName.value;
        if(foodName == "" || foodName==null){
            alert("Please enter a food name!");
            return;
        }
        const makeItemFunc = this.makeItem.bind(this);
        const food = makeItemFunc(foodName);

        this.foodItemsList.push(food.dataset.key);
        
        food.querySelector('.btnDelete').addEventListener('click', this.deleteItem.bind(this));
        food.querySelector('.btnPromote').addEventListener('click', this.promoteItem);
        food.querySelector('.btnUp').addEventListener('click', this.moveItemUp.bind(this));
        food.querySelector('.btnDown').addEventListener('click', this.moveItemDown.bind(this));

    },

    makeItem: function(foodName){
        const newItem = document.createElement('li');
        newItem.dataset.key = this.numFoods.toString();
        this.numFoods++;

        newItem.innerHTML = `
            <div class="foodItem">
                <p class="foodName">${foodName}</p>
                <button class="btnDelete">Delete</button>
                <button class="btnPromote">Promote</button>
                <button class="btnUp">Up</button>
                <button class="btnDown">Down</button>
            </div>
        `;

        foodList.prepend(newItem);
        return newItem;
    },

    promoteItem: function(){
        const foodItem = this.parentNode;  //.querySelector('.foodName');

        if(foodItem.classList.contains('promoted')){
            foodItem.classList.remove('promoted');
        }
        else{
            foodItem.classList.add('promoted');
        }
    },

    deleteItem: function(ev){
        const targ = ev.target;
        const foodList = document.querySelector('#foodList');
        
        const foodItem = targ.parentNode.parentNode;

        const index = this.foodItemsList.indexOf(foodItem.dataset.key);
        if(index > -1){
            this.foodItemsList.splice(index, 1); // remove from array
            this.numFoods--;
        }
        else{
            console.log("Food not found in array!");
        }

        foodList.removeChild(foodItem);
    },

    moveItemUp: function(ev){
        const targ = ev.target;

        
    },

    moveItemDown: function(ev){
        const targ = ev.target;

    },

    saveList: function(){
        localStorage.setItem('foodRosterList', JSON.stringify(this.foods));
    },

    loadList: function(){
        localStorage.getItem('foodRosterList');
    }
}

JavascriptRoster.init('#addItemForm');