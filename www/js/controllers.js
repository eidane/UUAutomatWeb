var difiTestWeb = angular.module('difiTestWeb',[]);

difiTestWeb.controller('mainCtrl', function($scope){

    ///INDIKATOR SPECIFIC
    $scope.indikator={};
    $scope.indikator.aktiviteter = [];

    ///ACTIVITY SPECIFIC
    $scope.activity={};
    $scope.activity.inputs=[];

    ///INPUT SPECIFIC
    $scope.currentInput={};
    $scope.currentInput.text = null;
    $scope.currentInput.alternatives=[];
    
    /**
     * Adds a new activity to indikator. 
     */
    $scope.addActivity = function()
    {
        $scope.indikator.aktiviteter.push($scope.activity);

        $scope.activity={};
        $scope.new_activity=!$scope.new_activity;
    }
    $scope.addAnswerAlternative = function()
    {
        console.log("Hello, I will now attempt to add another alternative: " + $scope.currentInput.text);
        //TODO: validation
        //
        var alternative = {};
        alternative.text = $scope.currentInput.text;
        alternative.expectedAnswer = $scope.currentInput.expectedAnswer;
        $scope.currentInput.alternatives.push(alternative);
        $scope.currentInput.text=null;
    }
    $scope.addInput = function(inputType)
    {
        console.log("Attempting to add input of type: " + inputType)

        //TODO: Validate.
        
        $scope.currentInput.type=inputType;
        $scope.activity.inputs.push($scope.currentInput); 
        if(inputType==="yesno")console.log("Value is: " + $scope.currentInput.answer)

        $scope.currentInput={};
        $scope.currentInput.text = null;
        $scope.currentInput.alternatives=[];
    }
    $scope.deleteActivity = function(index){
        console.log("Delete item: " + index);
        $scope.activity.inputs.splice(index,1);
    }
});

