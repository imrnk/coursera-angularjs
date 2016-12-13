(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var buyList = this;
    buyList.items = ShoppingListCheckOffService.getToBuyList();

    buyList.updateBothList = function(itemIndex){
      ShoppingListCheckOffService.updateBothList(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    //List of to-buy items
     var toBuyList = [
      {
        name : 'Pomfret Fish' ,
        quantity : '1 kilo'
      },
      {
        name : 'Chicken' ,
        quantity : '500 gm'
      },
      {
        name : 'ChickPeas' ,
        quantity : '200 gm'
      },
      {
        name : 'Oregano' ,
        quantity : '1 bottle'
      },
      {
        name : 'Cheese' ,
        quantity : '2 packets'
      },
      {
        name : 'Chilli Flakes' ,
        quantity : '1 packet'
      }
    ];

    service.getToBuyList = function(){
      return toBuyList;
    };

    //List of already bought items
    var boughtList = [];
    service.updateBothList = function (itemIndex){
      boughtList.push(toBuyList[itemIndex]);
      removeFromBuyList(itemIndex);
    }

    service.getBoughtList = function() {
      return boughtList;
    }

    function removeFromBuyList(itemIdex) {
      toBuyList.splice(itemIdex, 1);
    };
  }
})()
