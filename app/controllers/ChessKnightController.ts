/// <reference path="../_all.ts" />

// module declaration.
module chessknight {

    // Controller class declaration.
    export class ChessKnightController { }

    // Controller class definition in module and controller name to utilizate in index.html.
    angular.module('chessknight').controller('chessCtrl', ChessKnightController);
}