(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  console.log(items);
  var itemDetail = this;
  itemDetail.items = items;
}
})();
