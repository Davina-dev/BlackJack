function hit() {
    if (!canHit) {
      return
    }
  
    let cardImg = document.createElement('img')
    let card = deck.pop()
    cardImg.src = './assets/cards/' + card + '.png'
    yourSum += getValue(card)
    yourAceCount += checkAce(card)
    document.getElementById('your-cards').append(cardImg)
  
    if (reduceAce(yourSum, yourAceCount) > 21) {
      //A, J, 8 -> 1 + 10 + 8
      canHit = false
    }
  }