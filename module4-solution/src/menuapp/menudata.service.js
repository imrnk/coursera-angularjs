(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

//Menu Service
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };

  service.getItemsForCategories =  function (category) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: category
      }
    });
    return response;
  };
}

})();
