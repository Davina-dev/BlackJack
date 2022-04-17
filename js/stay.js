function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount)
    yourSum = reduceAce(yourSum, yourAceCount)
  
    canHit = false
    document.getElementById('hidden').src = './assets/cards/' + hidden + '.png'
  
    let message = ''
    if (yourSum > 21) {
      message = 'You Lose!'
    } else if (dealerSum > 21) {
      message = 'You win!'
    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
      message = '...Tie...'
    } else if (yourSum > dealerSum) {
      message = '👍 You Win!'
    } else if (yourSum < dealerSum) {
      message = '👎 You Lose!'
    }
  
    document.getElementById('dealer-sum').innerText = dealerSum
    document.getElementById('your-sum').innerText = yourSum
    document.getElementById('results').innerText = message
  }