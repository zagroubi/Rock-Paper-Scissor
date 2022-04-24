/*Setting up variables*/
let rpaper = document.getElementById("r-paper")
let rrock = document.getElementById("r-rock")
let rscissor = document.getElementById("r-scissor")

let lpaper = document.getElementById("l-paper")
let lrock = document.getElementById("l-rock")
let lscissor = document.getElementById("l-scissor")

let board = document.querySelector(".board")

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")

let arr = [rpaper,rrock,rscissor]

/*Movement*/
function computer(){
  let r = Math.floor(Math.random()*3)
  if (arr[r] == rpaper){
    rpaper.style.transform = "translate(-300px,250px) scale(1.3)"
  }else if (arr[r] == rrock){
    rrock.style.transform = "translateX(-300px) scale(1.3)"
  }else{
    rscissor.style.transform = "translate(-300px,-250px) scale(1.3)"
  }
  return arr[r]
}
function reset(x,y){
  setTimeout(() => {
    x.style.transform = "none"
    y.style.transform = "none"
  }, 1000)
}
function checkWin(a,b){
  
  if (a=="3"){
    winner.innerHTML = "You win"
    board.appendChild(winner)
    p1.innerHTML = "0"
    p2.innerHTML = "0"
  }
  if (b=="3"){
    winner.innerHTML = "You lose"
    board.appendChild(winner)
    p1.innerHTML = "0"
    p2.innerHTML = "0"
  }
}
let winner = document.createElement("div")
winner.style = `position:absolute;
                top:50%;left:50%;
                transform:translate(-50%,-50%);
                font-size: 55px;
                font-family: 'Courier New', Courier, monospace;
                font-weight: bold;`

lpaper.addEventListener("click",function(){
  lpaper.style.transform = "translate(300px,250px) scale(1.3)"
  let choice = computer()
  if (choice == rscissor){
    p2.innerHTML = parseInt(p2.innerHTML)+1
    reset(choice,lpaper)
  }else if (choice == rrock){
    p1.innerHTML = parseInt(p1.innerHTML)+1
    reset(choice,lpaper)
  }else{
    reset(choice,lpaper)
  }
  checkWin(p1.innerHTML,p2.innerHTML)
  setTimeout(() => {
    winner.innerHTML = ""
  }, 1000)
})

lrock.addEventListener("click",function(){
  lrock.style.transform = "translateX(300px) scale(1.3)"
  let choice = computer()
  if (choice == rscissor){
    p1.innerHTML = parseInt(p1.innerHTML)+1
    reset(choice,lrock)
  }else if (choice == rpaper){
    p2.innerHTML = parseInt(p2.innerHTML)+1
    reset(choice,lrock)
  }else{
    reset(choice,lrock)
  }
  checkWin(p1.innerHTML,p2.innerHTML)
  setTimeout(() => {
    winner.innerHTML = ""
  }, 1000)
})

lscissor.addEventListener("click",function(){
  lscissor.style.transform = "translate(300px,-250px) scale(1.3)"
  let choice = computer()
  if (choice == rrock){
    p2.innerHTML = parseInt(p2.innerHTML)+1
    reset(choice,lscissor)
  }else if (choice == rpaper){
    p1.innerHTML = parseInt(p1.innerHTML)+1
    reset(choice,lscissor)
  }else{
    reset(choice,lscissor)
  }
  checkWin(p1.innerHTML,p2.innerHTML)
  setTimeout(() => {
    winner.innerHTML = ""
  }, 1000)
})

