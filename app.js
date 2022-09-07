const initialPrice = document.querySelector("#initial-price")
const stockQuantity = document.querySelector("#stock-qty")
const currentPrice = document.querySelector("#current-price")
const form = document.querySelector("#submit-form")
const outputDiv = document.querySelector("#output")

form.addEventListener('submit', checkProfitOrLoss)

function checkProfitOrLoss(e){

    e.preventDefault()

    let initialPriceNum = Number(initialPrice.value)
    let stockQuantityNum = Number(stockQuantity.value)
    let currentPriceNum = Number(currentPrice.value)

    if(initialPriceNum < 0 || currentPriceNum < 0 || stockQuantityNum < 0) {
        outputDiv.innerText = "Invalid input. Make sure all the inputs are filled and are non zero positive numbers"

    } else {
        if(initialPriceNum< currentPriceNum){
            calculateProfit(initialPriceNum, currentPriceNum, stockQuantityNum)
        }
    
        else if(currentPriceNum < initialPriceNum){
            calculateLoss(initialPriceNum, currentPriceNum, stockQuantityNum)
        }
    
        else {
            outputDiv.innerText= ("You are breaking even")
        }

        console.log(initialPriceNum, currentPriceNum, stockQuantityNum)
    }
    
}

function calculateProfit(initialPriceNum, currentPriceNum, stockQuantityNum){
    totalInitial = initialPriceNum * stockQuantityNum
    totalCurrent = currentPriceNum * stockQuantityNum

    

    profitMade = totalCurrent-totalInitial

    profitPercentage = Math.round(((profitMade / totalInitial)* 100))

    outputDiv.innerText = "Congratulations! yours   profit is " + profitMade + " at " + profitPercentage + "% of returns"

    
}

function calculateLoss(initialPriceNum, currentPriceNum, stockQuantityNum){
    totalInitial = initialPriceNum * stockQuantityNum
    totalCurrent = currentPriceNum * stockQuantityNum

    lossMade = totalInitial - totalCurrent
    
    lossPercentage = ((lossMade / totalInitial)*100)

    outputDiv.innerText = "Oops!!  you have made a total loss of " + lossMade + " at " + lossPercentage + "% of loss percentage"
}