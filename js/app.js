angular.module('ibm', []);

angular.module('ibm').controller('MainController', function($scope, $http) {

    var requestUrl = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1';

    $scope.pictures = [];

    $scope.sortVal;
    $scope.selectSort = function(sortVal) {
        $scope.sortVal = sortVal;
    }

    $http.get(requestUrl).success(function(response) {
        console.log(response.photos.photo);
        $scope.pictures = response.photos.photo;
    });
});