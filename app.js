var app = angular.module('friendsList', [])

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.myName = 'Hillary';
  $scope.myFriends = ['Cami', 'Pailsey', 'Traci'];
  $scope.addFriend = function(name) {
    $scope.myFriends.push(name);
  }

}]);
