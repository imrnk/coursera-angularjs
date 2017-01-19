(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MenuAppController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response){
          return response.data;
        });
      }]
    }
  })

  //Particular item detail page
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemDetailController as itemCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategories($stateParams.category).then(function(response){
          return response.data.menu_items;
        });
      }]
    }
  });
}

})();
