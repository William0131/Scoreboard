let scoreEl = document.getElementById("score1")

let scoreEl2 = document.getElementById("score2")

let foulEl = document.getElementById("fouls1")

let foulEl2 = document.getElementById("fouls2")

let score = 0

let score2 = 0

let fouls = 0 

let fouls2 = 0

function fouls1(){
    fouls += 1
    foulEl.textContent = fouls
}

function foulsbtn(){
    fouls2 += 1
    foulEl2.textContent = fouls2
}
function btn1(){
    score += 1
    scoreEl.textContent = score
}

function btn2(){
    score += 2
    scoreEl.textContent = score
}

function btn3(){
    score += 3
    scoreEl.textContent = score
}

function btn4(){
    score2 += 1
    scoreEl2.textContent = score2
}

function btn5(){
    score2 += 2
    scoreEl2.textContent = score2
}

function btn6(){
    score2 += 3
    scoreEl2.textContent = score2
}

function reset(){
   let reset = score + score2 + fouls + fouls2
   reset = 0 
   scoreEl.textContent = reset
   scoreEl2.textContent = reset
   foulEl.textContent = reset
   foulEl2.textContent = reset
   score2 = 0 
   score = 0
   fouls = 0
   fouls2 = 0 
} 

