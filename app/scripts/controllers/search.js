'use strict';

/**
 * 
 * This is the Controller definition for Movie Search. 
 * It uses the SearchService to do the actual search, manipulates the received response
 * and displays them accordingly
 * 
 */
angular.module('angNodeApp')
  .controller('MovieSearchController', function ($scope, SearchService, $location) {
    
    $scope.searchTerm = '';
    $scope.searchData = {};
    var movieDetails;

    $scope.doSearch = function(){
    	console.log('Searching for ' + $scope.searchTerm );

    	SearchService.searchForMovie( $scope.searchTerm ).then(

    		function( response ){
    			

    			//transform the data
    			//
    			movieDetails = [];
    			
    			response.movies.forEach( function( elem ){
    				movieDetails.push( SearchService.extractMovieDetails( elem ));
    			} );

    			$scope.searchData.movies = movieDetails;
    			$scope.searchData.total = response.total;

                
    		},

    		function( error ){
    			console.log( error );
    		}
    	);

    };
  });

