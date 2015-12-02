(function (){
    var app = angular.module('reedsyApp', ['ngRoute', 'ngAnimate']);
    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/books.html'
            })
            .when('/books/:bookId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/single-book.html'
            })
            .otherwise({ redirectTo: '/' });
    });
}());
