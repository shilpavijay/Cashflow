
var app = angular.module("loginApp",[]);

// app.directive('validationDir',function(){
// 	return {
// 		require: 'ngModel',
// 		link: function (scope,elm,attrs,ctrl) {
// 				ctrl.$parsers.unshift(function(viewValue, $scope) {

// 		        var noMatch = viewValue != scope.reference
// 		        ctrl.$setValidity('noMatch', !noMatch);
// 		        return (noMatch)?noMatch:!noMatch;
// 			      });

// 			    scope.$watch("reference", function(value) {
// 		        ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
// 				})
// 		}
// 	}
// });

app.controller("loginController",['$scope','$http', function($scope,$http){
}]);			    