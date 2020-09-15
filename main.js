var liste = []
var currimg = "./images/js2.jpg"
var nodeimg = "/images/nodelogo.png"
var mongoimg = "/images/mongologo.jpg"
var reactimg = "/images/react.png"
var angularimg = "/images/angularlogo.jpg"
var vueimg = "/images/vuelogo.png"


var genel = document.querySelector(".genel")
// genel.style.pointerEvents = "auto"

var say = 0
var matchcount = 0



function bax(bu){
    say++
    liste.push(bu)
    bu.src = "./images/" + bu.getAttribute("data-back")
    if(liste.length == 2 && liste[0].src == liste[1].src){
        matchcount += 1
        document.querySelector("#mc").innerText = matchcount
        console.log("esittdi");
        liste.splice(0,liste.length)
        bu.onclick = ""
    }
    else if(liste.length == 2 && liste[0].src != liste[1].src){
        console.log("uduzduun");
        genel.style.pointerEvents = "none"
        setTimeout(() => {
            genel.style.pointerEvents = "auto"
            liste[0].src = currimg
            liste[1].src = currimg   
            liste.splice(0,liste.length) 
        },2000)
    }
    document.querySelector("h2").innerText = "click count " + say
}