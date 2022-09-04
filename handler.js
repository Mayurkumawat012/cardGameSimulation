function pick1card(cards) {
    let cardKeys = Object.keys(cards)
    if (cardKeys.length < 1) {
        throw new Error("not enough cards to play")
    }
    const card1 = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    delete cards[card1]
    const [num] = card1.split("_")
    return num
}
function pick4cards(cards) {
    let cardKeys = Object.keys(cards)
    if (cardKeys.length < 4) {
        throw new Error("not enough cards for all players")
    }

    const card1 = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    delete cards[card1]

    cardKeys = Object.keys(cards)
    const card2 = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    delete cards[card2]

    cardKeys = Object.keys(cards)
    const card3 = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    delete cards[card3]

    cardKeys = Object.keys(cards)
    const card4 = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    delete cards[card4]

    return [card1,card2, card3, card4]

}

function isAllNull(playerResult) {
    for (let i = 0; i < playerResult.length; i++) {
        if (playerResult[i] !== null) {
            return false
        } 
    }
    return true
}

function convertCardCharInNumber(char) {
    if (char === 'A') {
        return '14'
    } if (char === 'J') {
        return '11'
    } if (char === 'Q') {
        return '12'
    } if (char === 'K') {
        return '13'
    }
    return parseInt(char)
}

function getNumber(num) {
    return convertCardCharInNumber(num)
}

function getNumbers(card1, card2, card3) {
    const [num1] = card1.split("_")
    const [num2] = card2.split("_")
    const [num3] = card3.split("_")

    return [num1,num2,num3]
}

function isSimilar(card1, card2, card3) {
    let [num1, num2, num3] = getNumbers(card1, card2, card3)

    if (num1 === num2 && num2 === num3) {
        return num2
    }
    return null
}

function isSequence(card1, card2, card3) {
    let [num1, num2, num3] = getNumbers(card1, card2, card3)
    // console.log([num1, num2, num3]);
    num1 = convertCardCharInNumber(num1)
    num2 = convertCardCharInNumber(num2)
    num3 = convertCardCharInNumber(num3)
    // console.log([num1, num2, num3]);
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    } 
    if (num1 > num3) {
        [num1, num3] = [num3, num1];
    } 
    if (num2 > num3) {
        [num3, num2] = [num2, num3];
    }
    // console.log([num1, num2, num3]);
    if (num1 < num2 && num2 < num3) {
        if( num3-1  == num2 && num2-1 == num1) {
            return num3
        }
    }

    return null
}

function highestPair(card1, card2, card3) {
    let [num1, num2, num3] = getNumbers(card1, card2, card3)
    // console.log([num1, num2, num3]);
    if (num1 === num2) {
        return num1
    } if (num2 === num3) {
        return num2
    } if (num1 === num3) {
        return num1
    }
    return null
}

function topCard (card1,card2,card3) {
    let [num1, num2, num3] = getNumbers(card1, card2, card3)
    
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    } 
    if (num1 > num3) {
        [num1, num3] = [num3, num1];
    } 
    if (num2 > num3) {
        [num3, num2] = [num2, num3];
    }

    return num3
}

function findMaxCard(allCards) {
    let mx = 0
    let char = ''
    for (let i = 0; i < allCards.length;i++) {
        if (allCards[i] === null) {
            continue
        }
        let num = getNumber(allCards[i])
        if(mx < num) {
            mx = num
            char = allCards[i]
        }

    }
    return char
}
export { pick4cards, highestPair, isSimilar, isSequence, topCard, isAllNull,pick1card, findMaxCard }