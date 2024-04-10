(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();

    list.checkOff = function(itemIndex) {
      console.log("Checking off item ", itemIndex);
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }


  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;
    list.items = ShoppingListCheckOffService.getItemsBought();
  }


  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "Milk", quantity: 5 },
      { name: "Eggs", quantity: 2 },
      { name: "Soap", quantity: 12 },
      { name: "Paneer", quantity: 3 },
      { name: "Onions", quantity: 10 },
      { name: "Chicken Masala", quantity: 1 },
      { name: "Shampoo", quantity: 1 },
      { name: "Rice", quantity: 4 },
      { name: "Pasta", quantity: 1 },
      { name: "Oil", quantity: 1 }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }
})();