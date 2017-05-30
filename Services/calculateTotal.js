

mainObj.service('cartService', function () {
    var cartItems = []; //Initializing an array to store items added to cart.
    this.addItem = function (id, name, qty, price) {
        var item = {};  //Creating an object to push in cartItems.
        item.id = id;
        item.name = name;
        item.qty = qty;
        item.price = price;
        cartItems.push(item);
        console.log(cartItems);
    };

    this.deleteItem = function (index) {
        cartItems.splice(index, 1);
        console.log(cartItems);
    };

    this.getCart = function () {
        return cartItems;
    } 
});

//mainObj.factory('addItemFactory', function (id, name, qty, price) {
//    var newarray = {};
   


//    //newarray.push(item)
//    return item;
//});

//mainObj.factory('removeItemFactory', function () {
    
//});