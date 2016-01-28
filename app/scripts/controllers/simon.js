'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {


  	$scope.colores= [ ];
  	$scope.titulo= 'Simon';
    $scope.acumuladorA= 0;
    $scope.acumuladorB= 0;
    $scope.acumuladorC= 0;
    $scope.acumuladorD= 0;




   $scope.play=function(color){
    if (color=='green'){
 $scope.acumuladorA= $scope.acumuladorA +1;
      
    }
    if (color=='blue'){
 $scope.acumuladorB= $scope.acumuladorB +1;
      
    }
    if (color=='red'){
 $scope.acumuladorC= $scope.acumuladorC +1;
     
    }
    if (color=='yellow'){
 $scope.acumuladorD = $scope.acumuladorD +1;
    }
      
    
   $scope.colores.push(color);
  }

   $scope.borra= function( colores){
   $scope.colores = [];
   
    $scope.acumuladorA= 0;
    $scope.acumuladorB= 0;
    $scope.acumuladorC= 0;
    $scope.acumuladorD= 0;

 }

 });
 