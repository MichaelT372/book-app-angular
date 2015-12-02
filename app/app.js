(function (){
    var app = angular.module('reedsyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
    app.config(function ($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                controller: 'booksController',
                templateUrl: 'app/views/books.html'
            })
            .when('/books/:bookId', {
                controller: 'singleBookController',
                templateUrl: 'app/views/single-book.html'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true); //remove the pound sign from URLs
    });
}());
