(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;
}

})();
