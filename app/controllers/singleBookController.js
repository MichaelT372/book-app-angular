(function() {

    var singleBookController = function($scope, $routeParams, booksFactory) {
        $scope.bookId = $routeParams.bookId;
        $scope.limit = 3; // max number of similar books to show

        $scope.timeSince = function(date) {
            return booksFactory.timeSince(date);
        }

        function init() {
            $scope.book = booksFactory.getBook($scope.bookId);
            $scope.similarBooks = booksFactory.getSimilarBooks($scope.book);
            window.scrollTo(0, 0); //put user to top of page after they click on a similar reading box
        }

        init();
    }

    singleBookController.$inject = ['$scope', '$routeParams', 'booksFactory',];

    angular.module('reedsyApp')
        .controller('singleBookController', singleBookController);

}());
