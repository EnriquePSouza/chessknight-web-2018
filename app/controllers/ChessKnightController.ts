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

        // (highlightsAndKnightOnClick Callback method)
        // Method to Highlight the squares returned from the API. 
        highlightSquares(squareId: string, squaresArray: Chessboard): void {
            
            // Variables to locate and receive infos from html elements in the index.html.
            var divs, divItem;

            // Remove the Knight Piece from the old square and add to the new square after the click.
            if (this.divId != '') {
                divItem = angular.element(document.querySelector("div#" + this.divId));
                divItem.removeClass('imgKnight');
                divItem = angular.element(document.querySelector("div#" + squareId));
                divItem.addClass('imgKnight');
                this.divId = squareId;
            } else {
                divItem = angular.element(document.querySelector("div#" + squareId));
                divItem.addClass('imgKnight');
                this.divId = squareId;
            }

            // Low the Table opacity to help highlights visualization.
            divs = angular.element(document.querySelectorAll("div.divTableCell"));

            // Back opacity to normal before insert the highlights.
            divs.removeClass('opaque');

            // Remove highlighs from old Knight piece and prepare to receive new highlights.
            divs.removeClass('highlightTurnOne');
            divs.removeClass('highlightTurnTwo');
            divs.addClass('opaque');

            // Insert the highlights in the squares returned from the Matrix API.
            for (let i = 0; i < squaresArray[0].length; i++) {
                divItem = angular.element(document.querySelector("div#" + squaresArray[0][i]));
                divItem.removeClass('opaque');
                divItem.addClass('highlightTurnOne');
            }

            for (let i = 0; i < squaresArray[1].length; i++) {
                divItem = angular.element(document.querySelector("div#" + squaresArray[1][i]));
                divItem.removeClass('opaque');
                divItem.addClass('highlightTurnTwo');
            }
        }

        // Method to call the Matrix API.
        highlightsAndKnightOnClick(squareId: string): void {

            this.http.get('http://127.0.0.1:5000/chess/' + squareId)
                .then((response) => {
                    // Callback method(executes after the api return a value).
                    this.highlightSquares(squareId, response.data)
                });
        }
    }

    // Controller class definition in module and controller name to utilizate in index.html.
    angular.module('chessknight').controller('chessCtrl', ChessKnightController);
}