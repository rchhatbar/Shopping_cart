function calculateTotal() {
    var theForm = document.forms["itemList"];
    var itemSelected = theForm.elements["itemSelected"].value;
    var itemPrice = document.getElementById('itemPrice').value;
    var totalPrice = itemSelected;
    console.log(itemSelected);
    console.log(itemPrice);
}