import { cards } from "./cards.js"
import { pick4cards, highestPair, isSimilar, isSequence, topCard, isAllNull,pick1card, findMaxCard } from "./handler.js"

export function recursiveFunctionToHandelTie(players) {
    console.log("Tie Between Players,",players," Picking random cards to decide winner");

    let results= []
    for (let i = 0; i < players.length; i++) {
        results.push(pick1card(cards))
    }

    // results= [ '2', 'J', '6', 'J' ]
    console.log("new cards",{players, results});
    let newPlayers = []
    let mxChar = findMaxCard(results)
    for (let i = 0; i < results.length; i++) {
        if (results[i] === mxChar) {
            newPlayers.push(players[i])
        }
    }

    if (newPlayers.length === 1) {
        return newPlayers[0]
    } 
    return recursiveFunctionToHandelTie(newPlayers)
    
}

export function handelWinner(results) {
    let players = []

    let mxChar = findMaxCard(results)
    for (let i = 0; i < results.length; i++) {
        if (results[i] !== null && results[i] === mxChar) {
            if (results[i] === mxChar) {
                players.push(i+1)
            }
        }
    }
    if (players.length === 1) {
        return players[0]
    }
    return recursiveFunctionToHandelTie(players)
    
}

function gameSimulate() {
    let players = [
        [],
        [],
        [],
        []
    ]

    for (let i = 0; i < 3; i++) {
        const [card1, card2, card3, card4] = pick4cards(cards)
        players[0].push(card1)
        players[1].push(card2)
        players[2].push(card3)
        players[3].push(card4)
    }
    console.log(players);

    let playerResult = [null, null, null, null]

    for (let i = 0; i < 4; i++) {
        const isSim = isSimilar(players[i][0],players[i][1], players[i][2])
        if (isSim !== null) {
            playerResult[i] = isSim
        }
    }

    if (!isAllNull(playerResult)) {
        console.log({isSim:true,playerResult});
        return handelWinner(playerResult)
    }

    for (let i = 0; i < 4; i++) {
        const isSeq = isSequence(players[i][0],players[i][1], players[i][2])
        if (isSeq !== null) {
            playerResult[i] = isSeq
        }
    }
    if (!isAllNull(playerResult)) {
        console.log({isSeq:true,playerResult});
        return handelWinner(playerResult) 
    }

    for (let i = 0; i < 4; i++) {
        const highest = highestPair(players[i][0],players[i][1], players[i][2])
        if (highest !== null) {
            playerResult[i] = highest
        }
    }
    if (!isAllNull(playerResult)) {
        console.log({higPair:true,playerResult});
        return handelWinner(playerResult)
    }

    
    for (let i = 0; i < 4; i++) {
        const top = topCard(players[i][0],players[i][1], players[i][2])
        if (top !== null) {
            playerResult[i] = top
        }
    }
    console.log({top:true,playerResult});
    return handelWinner(playerResult)
}


console.log({winnerPlayer:gameSimulate()});