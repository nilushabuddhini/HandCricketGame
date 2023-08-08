let target=Math.floor(Math.random()*100)
let pi =document.getElementById("head").innerHTML;
function myFunction(){
   document.getElementById("head").innerHTML=target
}
myFunction()
function One() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="1.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+1
    document.getElementById("runs").innerHTML=z


    if(x==1){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-1
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(z==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }


}
function Two() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="2.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+2
    document.getElementById("runs").innerHTML=z

    if(x==2){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-2
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(z==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }
}
function Three() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="3.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+3
    document.getElementById("runs").innerHTML=z

    if(x==3){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-3
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(z==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }
}
function Four() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="4.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+4
    document.getElementById("runs").innerHTML=z

    if(x==4){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-4
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(pz==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }
}
function Five() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="5.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+5
    document.getElementById("runs").innerHTML=z

    if(x==5){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-5
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(z==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }
}
function Six() {
    let x =Math.floor(Math.random()*7)
    document.getElementById("Hand").src=x+".jpg"
    document.getElementById("Hand2").src="6.jpg"
    let y =parseInt(document.getElementById("runs").innerHTML)
    let z=y+6
    document.getElementById("runs").innerHTML=z

    if(x==6){
        document.getElementById("Won").innerHTML="You are out!You lost"
        document.getElementById("runs").innerHTML=z-6
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    } else if(z==target){
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    }else if (z>target) {
        document.getElementById("Won").innerHTML="Condragulations! You won"
        document.getElementById("btn").style.display="none"
        document.getElementById("btnr").style.display="block"
    
   }
}
function restart(){
    location.reload()
}

