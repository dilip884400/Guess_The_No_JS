'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector(".message").textContent = "heelo baby how do you do"
// document.querySelector('.number').textContent= 23
// document.querySelector('.score').textContent= 23
// document.querySelector('.guess').value= 23


let number = Math.trunc(Math.random()*20)+1;

let score = 20;

let highScore=0

document.querySelector('.number').textContent= number

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //when user input no number

    if(!guess){
        document.querySelector('.message').textContent = "No Number!"
    }else if(guess === number){
        document.querySelector('.message').textContent = " Congratulavdassun!"

        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').style.width = "40rem"
        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }
        //when use input correct no
    }else if(guess > number){
        //when use input high no
        if(score>1){
document.querySelector('.message').textContent = "to hight!"
        score--
        document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "You Loss dumb ass!"
            document.querySelector('.score').textContent = 0
        }


        //when use input low number
    }else if(guess < number){
       if(score>1){
document.querySelector('.message').textContent = "to hight!"
        score--
        document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = "You Loss dumb ass!"
            document.querySelector('.score').textContent = 0
        }
    }
   
})

document.querySelector(".again").addEventListener('click', function(){
    score =20 
    number=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent = "Start guessing..."
document.querySelector('.score').textContent = 20
document.querySelector('.number').textContent= number
document.querySelector('.guess').value=""
   document.querySelector('body').style.backgroundColor = ""
        document.querySelector('.number').style.width = "15rem"
})