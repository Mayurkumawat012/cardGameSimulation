import { pick4cards, highestPair, isSimilar, isSequence, topCard } from "./handler.js"

function testHighestPair() {
    const [card1, card2, card3] = [ 'J_spades', '5_spades', 'J_hearts' ]
    const pair = highestPair(card1,card2,card3)
    console.log(pair);
}

function testIsSequence() {
    const [card1, card2, card3] = [ '9_diamonds', '10_diamonds', '8_spades' ]
    const pair = isSequence(card1,card2,card3)
    console.log(pair);
}

testIsSequence()