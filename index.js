import { cards } from "./cards.js"
import { pick4cards, highestPair, isSimilar, isSequence, topCard, isAllNull,pick1card, findMaxCard,handelWinner } from "./handler.js"
import logger from 'node-color-log'

function printPlayersCards(players) {
    players.forEach((player,i) => {
        logger.info(`player-${i+1}`,player)
    }); 
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
    // console.log(players);
    printPlayersCards(players)

    let playerResult = [null, null, null, null]

    for (let i = 0; i < 4; i++) {
        const isSim = isSimilar(players[i][0],players[i][1], players[i][2])
        if (isSim !== null) {
            playerResult[i] = isSim
        }
    }

    if (!isAllNull(playerResult)) {
        // console.log({isSim:true,playerResult});
        logger.info('Similar Cards', {playerResult});
        return handelWinner(playerResult,cards)
    }

    for (let i = 0; i < 4; i++) {
        const isSeq = isSequence(players[i][0],players[i][1], players[i][2])
        if (isSeq !== null) {
            playerResult[i] = isSeq
        }
    }
    if (!isAllNull(playerResult)) {
        // console.log({isSeq:true,playerResult});
        logger.info('Sequential Cards', {playerResult});
        return handelWinner(playerResult,cards) 
    }

    for (let i = 0; i < 4; i++) {
        const highest = highestPair(players[i][0],players[i][1], players[i][2])
        if (highest !== null) {
            playerResult[i] = highest
        }
    }
    if (!isAllNull(playerResult)) {
        // console.log({higPair:true,playerResult});
        logger.info('Similar Pairs of Cards', {playerResult});
        return handelWinner(playerResult,cards)
    }

    
    for (let i = 0; i < 4; i++) {
        const top = topCard(players[i][0],players[i][1], players[i][2])
        if (top !== null) {
            playerResult[i] = top
        }
    }
    // console.log({top:true,playerResult});
    logger.info('Top Cards', {playerResult});
    return handelWinner(playerResult,cards)
}


logger.info({winnerPlayer:gameSimulate()})
// console.log({winnerPlayer:gameSimulate()});