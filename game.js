const rock = document.querySelector('.fa-hand-rock')
const paper = document.querySelector('.fa-hand-paper')
const scissors = document.querySelector('.fa-hand-scissors')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const cpu_choice = document.querySelector('.cpu_choice')
let youResult = 0;
let cpuResult = 0;
left.innerHTML = youResult
right.innerHTML = cpuResult
const PlayGame = a => {
 

    const cpuChoice = ['rock','paper','scissors']
    let cpuNumberChoice = Math.floor(Math.random()*3+0)
    let cpuChoiceRandom = cpuChoice[cpuNumberChoice] 
    
    let gameResult = a + cpuChoiceRandom
    
    const win = () => {
        console.log(`You: ${a}, CPU: ${cpuChoiceRandom}, result: WIN`)
        youResult = ++youResult
        left.innerHTML = youResult
        left.classList.add('green')
        setTimeout(function() {
            left.classList.remove('green')
        }, 1000); 
        end()
    }

    const lose = () => {
        console.log(`You: ${a}, CPU:${cpuChoiceRandom}, result: Lose`)
        ++cpuResult
        right.innerHTML = cpuResult
        end()
    }

    const end = () => {
        if(youResult === 3 ){
            console.log('end game You Win!') 
            
            setTimeout(function() {
               
                youResult = 0;
                left.innerHTML = youResult
                cpuResult = 0;
                right.innerHTML = cpuResult
            }, 3 * 1000); 
        }else if( cpuResult === 3) {
            console.log('end game CPU Win!') 
            setTimeout(function() {
                
                cpuResult = 0;
                right.innerHTML = cpuResult
                youResult = 0;
                left.innerHTML = youResult
            }, 3 * 1000); 
        }
    }
    if(gameResult === 'rockrock') {
        
        console.log('Again')
    } else if ( gameResult === 'rockscissors') {
       win()
    }else if ( gameResult === 'rockpaper') {
        lose()
    }else if( gameResult === 'paperpaper') {
        console.log('Draw: PAPIER PAPIER')
    }else if ( gameResult === 'paperscissors') {
      lose()
    }else if ( gameResult === 'paperrock') {
       win()
    }else if( gameResult === 'scissorsscissors') {
        console.log('Draw: SCISSORS SCISSORS')
    }else if ( gameResult === 'scissorsrock') {
       lose()
    }else if ( gameResult === 'scissorspaper') {
       win()
    }
    
    return console.log(gameResult)


}

rock.addEventListener('click', () => {
   PlayGame('rock')
})

paper.addEventListener('click', () => {
    PlayGame('paper')
 })

 scissors.addEventListener('click', () => {
    PlayGame('scissors')
 })
 




// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

