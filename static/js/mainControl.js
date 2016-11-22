
var app = angular.module("expApp", []);
app.controller("expCtrl",['$scope', '$http', function($scope,$http) {
// $scope.xbutton = true;
// $scope.digitsOnly = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
$scope.items = [];
$scope.total = 0.00000;
$scope.insertNew = function() {
    $scope.items.push({desc: $scope.newDesc.toUpperCase(), amt: $scope.newAmt, xbutton: true});
    $scope.total += $scope.newAmt;
    $scope.newDesc="";
    $scope.newAmt="";

};

$scope.delItem = function(key,x) {  
    x.xbutton = false;
    $scope.total -= x.amt;
    var oldlist = $scope.items
    $scope.items = []
    angular.forEach(oldlist,function(x){
        if(x.xbutton) $scope.items.push(x);
    });
};

$scope.postdata = function(pass) {
    // data1={'name':'Shilpa'}
    // $http({
    //     url:"",
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     data: JSON.stringify(data1)
    //     // data: JSON.stringify(data)
    // }).success(function(data){console.log(data)});
        // var xsrf = $.param({name: "key"});
        // $http({
        //     method: 'POST',
        //     url: "/s",
        //     data: xsrf,
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        // })
        // .success(function (data, status, headers, config){
        //     console.log('success');
        //     })
        // .error(function (data,status,headers,config){
        //     console.log('failed');
        //     });
        var data = $.param({
        fName: 'shilpa',
        lName: 'a'
            });

    var config = {
        headers : {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            'Content-Type': 'application/json', /*or whatever type is relevant */
            'Accept': 'application/json' 
        }
    }

    $http.post('http://localhost:5000/s/r/a/', data, config)
    .success(function (data, status, headers, config) {
        $scope.PostDataResponse = data;
    })
    .error(function (data, status, header, config) {
        console.log('fail')
    });
};


}]);