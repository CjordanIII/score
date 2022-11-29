//declared varables
let num1=0
let num2=0
let score1= document.getElementById("homescore")
let score2= document.getElementById("homescore2")



//left score

function btn1(){
    num1=num1+1
    score1.innerText=num1
    console.log(num1)
    
}

function btn2(){
    num1=num1+2
    score1.innerText=num1
    console.log("clicked")
}

function btn3(){
    num1=num1+3
    score1.innerText=num1
    console.log("clicked")
}


//right score

function bt1_2(){
    num2=num2+1
    score2.innerText=num2
    console.log(num1)
    
}

function bt2_2(){
    num2=num2+2
    score2.innerText=num2
    console.log("clicked")
}

function bt3_2(){
    num2=num2+3
    score2.innerText=num2
    console.log("clicked")
}

