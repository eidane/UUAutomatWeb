var difiTestWeb = angular.module('difiTestWeb',[]);

difiTestWeb.controller('mainCtrl', function($scope){

    $scope.data=[
    {"name":"Roger"},
    {"name":"Stian"},
    {"name":"Thomas"},
    {"name":"Eivind"}
    ];
    $scope.activity={};
    $scope.indikator={};
    $scope.indikator.aktiviteter = [];
    $scope.addActivity = function()
    {
        console.log("test")
        console.log("hello" + $scope.activity)
        $scope.indikator.aktiviteter.push($scope.activity);
        $scope.activity={};
        $scope.new_activity=!$scope.new_activity;
    }

});