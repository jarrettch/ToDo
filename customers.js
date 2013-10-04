function CustomerCtrl($scope) {
	$scope.customers = ["Walter White","Jesse Pinkman"]
  $scope.addCust = function () {
    $scope.customers.push($scope.newCust);
  }

}