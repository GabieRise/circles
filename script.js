const f1 = document.getElementsByid('first-color')
const f2= document.getElementsByid('second-color')
const f3 = document.getElementsByid('third-color')
const f4 = document.getElementsByid('fourth-color')
const f5 = document.getElementsByid('fifth-color')
const f6 = document.getElementsByid('sixth-color')
const circles = [f1,f2,f3.f4.f5,f6]
const body = document.querySelector('body')

function shuffleMe(){

    circles.push(circles[0])
    circles.shift()
    for(var i = 0; i<circles.length; i++){
        body.appendChild(circles[i])
    }    
}
