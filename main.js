let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           if(Math.random() > .5){
               this.state = 1
           } else{
               this.state = 0
           }
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if(this.state === 1){
               return 'Heads '
           }
           return 'Tails '
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           if(this.state === 1){
            image.src = './images/1-oz-copper-norse-dragon--wod-obv.jpg'
        }else{
            image.src = './images/1-oz-copper-norse-dragon--wod-rev.jpg'
        }
        return image;
    }
};

let body = document.querySelector('body')
let stringZone = document.createElement('div')
stringZone.className = 'main'
let stringHead = document.createElement('h1')
stringHead.append('String Results')
stringZone.append(stringHead)
body.append(stringZone)
let stringResult = document.createElement('div')
stringZone.append(stringResult)
let stringFlipButton = document.createElement('button')
stringFlipButton.append('Flip 20 Times')
stringZone.append(stringFlipButton)

let coinImageZone = document.createElement('div')
coinImageZone.className = 'main'
let coinImageHead = document.createElement('h1')
coinImageHead.append('Coin Image Results')
coinImageZone.append(coinImageHead)
body.append(coinImageZone)
let coinImageResults = document.createElement('div')
coinImageZone.append(coinImageResults)
let coinFlipButton = document.createElement('button')
coinFlipButton.append('Flip 20 Times')
coinImageZone.append(coinFlipButton)
// Test and demonstrate that your coin object is complete by doing the following:

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)
function display20Flips(){
    for(let index = 0; index < 20; index++){
        coin.flip()
        stringResult.append(coin.toString())
    }
}
stringFlipButton.addEventListener('click', function(){
    display20Flips()
})

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
function display20Images(){
    for(let index = 0; index < 20; index++){
        coin.flip()
        coinImageResults.append(coin.toHTML())
    }
}
coinFlipButton.addEventListener('click', function(){
    display20Images()
})

// Your HTML file should have nothing in the body except for your script tag. Instead of hard-coding HTML elements, create them dynamically with Javascript and append them to your HTML using document.createElement and ParentNode.append