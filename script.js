window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none"

},2000)

}

/* Dark mode */

function toggleMode(){

document.body.classList.toggle("light-mode")

}

/* Hug hearts */

function hug(){

alert("Sending the warmest hug to my favorite girl 🤗💖")

let container=document.getElementById("hearts-container")

for(let i=0;i<12;i++){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="💖"

heart.style.left=Math.random()*100+"vw"

container.appendChild(heart)

setTimeout(()=>{

heart.remove()

},3000)

}

}

/* Music */

function toggleMusic(){

let song=document.getElementById("song")

if(song.paused){

song.play().catch(()=>{

alert("Tap again to play music 🎵")

})

}else{

song.pause()

}

}

/* Secret page */

function secret(){

let pass=prompt("Enter the secret password")

if(pass==="Heyoo babyy"){

window.location.href="sorry.html"

}else{

alert("Wrong password 🥺")

}

}

/* Popup */

setTimeout(function(){

document.getElementById("surprisePopup").style.display="flex"

},10000)

function closePopup(){

document.getElementById("surprisePopup").style.display="none"

}

/* Tap hearts (not on buttons) */

document.addEventListener("click",function(e){

if(e.target.tagName==="BUTTON") return

let heart=document.createElement("div")

heart.className="tap-heart"

heart.innerHTML="💖"

heart.style.left=e.clientX+"px"
heart.style.top=e.clientY+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},1000)

})