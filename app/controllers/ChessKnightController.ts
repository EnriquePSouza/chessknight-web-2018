/// <reference path="../_all.ts" />

// module declaration.
module chessknight {

    // Controller class declaration.
    export class ChessKnightController {

        // Property to simplify the http declarations.
        private http: any;

        // Controller variable to manage Knight piece position in Chessboard.
        private divId: string;

        // Property to receive and set the Chessboard Algebraic Ids in the squares.
        private chessboard: Chessboard;

        // Initialize controller properties values and Execute initialization 
        // methods in controller module creation. 
        constructor(private $http: ng.IHttpService) {
            this.http = $http;
            this.divId = '';
            this.chessboard = this.matrix();
        }

        // Method to generate the Chessboard for the index.html.
        matrix(): Chessboard {

            var matrix = new Chessboard;

            var colsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

            // Creates all lines:
            for (var i = 0; i < colsArray.length; i++) {

                // Creates an empty line
                matrix[i] = [];

                // Adds cols to the empty line:
                matrix[i] = new Array(colsArray.length);

                for (var j = 0; j < colsArray.length; j++) {
                    // Initializes:
                    matrix[i][j] = colsArray[j] + (8 - i);
                }
            }

            return matrix;
        }
    }

    // Controller class definition in module and controller name to utilizate in index.html.
    angular.module('chessknight').controller('chessCtrl', ChessKnightController);
}