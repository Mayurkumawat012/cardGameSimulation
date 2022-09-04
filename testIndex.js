import {recursiveFunctionToHandelTie, handelWinner} from './index.js'

function testRecursiveFunctionToHandelTie() {
    const players = [1]
    console.log(recursiveFunctionToHandelTie(players));
}


function testHandelWinner() {
    const results = ['J', 'K', 'K', null]
    console.log(handelWinner(results));
}
// testRecursiveFunctionToHandelTie()
testHandelWinner()