var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
  console.log('BooksController Loaded');

  $scope.getBooks = function () {
    $http.get('/api/books').success((response) => {
      $scope.books = response;
    });
  }

  $scope.getBook = function () {
    $http.get('/api/books/:id').success((response) => {
      $scope.book = response;
    });
  }
}]);
