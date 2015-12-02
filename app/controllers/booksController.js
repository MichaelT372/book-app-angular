(function() {

    var booksController = function($scope, filterFilter, booksFactory) {
        //loading data from factory
        $scope.books = booksFactory.books;
        $scope.genres = booksFactory.genres;

        // pagination controls
	    $scope.currentPage = 1;
	    $scope.totalItems = $scope.books.length;
	    $scope.itemsPerPage = 4; //items displayed per page
	    $scope.pages = 5; //amount of pages to show in pagination bar

        /*
            These watchers upate the pagination when filtering happens
        */

        $scope.$watch('search', function (newVal, oldVal) {
            $scope.filtered = filterFilter($scope.books, newVal);
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;
        }, true);

        $scope.$watch('genre', function (newVal, oldVal) {
            $scope.filtered = filterFilter($scope.books, newVal);
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;
        }, true);

        $scope.timeSince = function(date) {
            return booksFactory.timeSince(date);
        }
    };

    //injects dependencies to avoid errors with minification
    booksController.$inject = ['$scope', 'filterFilter', 'booksFactory',];

    /* custom filter that keeps track of where ng-repeat is in the pagination */
    angular.module('reedsyApp')
        .filter('startFrom', function () {
            return function (input, start) {
                if (input) {
                    start = +start;
                    return input.slice(start);
                }
                return [];
            };
        });

    angular.module('reedsyApp')
        .controller('booksController', booksController);

}());
