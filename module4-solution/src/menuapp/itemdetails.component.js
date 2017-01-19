(function() {
'use strict';

angular.module('MenuApp')
  .component('itemDetail', {
    templateUrl: 'src/menuapp/templates/itemdetail.template.html',
    bindings: {
      items: '<'
    }
  });

})();
