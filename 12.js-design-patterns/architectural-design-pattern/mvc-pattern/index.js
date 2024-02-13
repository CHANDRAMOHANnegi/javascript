class ShoppingCartModel {
  //write code here
}

class ShoppingCartView {
  constructor() {
    this.controller = null;
  }
  registerWith(controller) {
    this.controller = controller;
    this.controller.addView(this);
  }

  displayItem(itemNumber, itemName, itemQuantity, itemPrice) {
    console.log(
      `Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`
    );
  }

  //write code here
}

class ShoppingCartController {
  constructor() {
    this.model = null;
    this.view = null;
    this.itemList = [];
  }

  addView(view) {
    this.view = view;
  }
  addModel(model) {
    this.model = model;
  }

  //write code here
}
