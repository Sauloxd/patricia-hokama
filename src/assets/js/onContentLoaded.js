angular.module('myapp').run(function($rootScope, $state){

    $rootScope
        .$on('$viewContentLoaded',
            function(event, viewConfig){ 
              $(".hidden").css("visibility", "initial");
              $(".img-neutral").css("overflow", "initial");
        });


})








