function startGame() {
    hidden = deck.pop()
    dealerSum += getValue(hidden)
    dealerAceCount += checkAce(hidden)
  
    while (dealerSum < 17) {
      let cardImg = document.createElement('img')
      let card = deck.pop()
      cardImg.src = './assets/cards/' + card + '.png'
      dealerSum += getValue(card)
      dealerAceCount += checkAce(card)
      document.getElementById('dealer-cards').append(cardImg)
    }
    console.log(dealerSum)
  
    for (let i = 0; i < 2; i++) {
      let cardImg = document.createElement('img')
      let card = deck.pop()
      cardImg.src = './assets/cards/' + card + '.png'
      yourSum += getValue(card)
      yourAceCount += checkAce(card)
      document.getElementById('your-cards').append(cardImg)
    }
  
    console.log(yourSum)
    document.getElementById('hit').addEventListener('click', hit)
    document.getElementById('stay').addEventListener('click', stay)
    //document.getElementById('replay').addEventListener('click', replay)

  }