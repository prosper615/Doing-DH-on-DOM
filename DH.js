

// Here am trying to simply implement Deffie-Hellman crytography in a simple way. This is the way it usually 
// works with exceptions of some little other stuffs. Showing this on the Dom is simply stupid of me and my 
// stupid codes are just so stupid

import { LetsAgree } from "./LetsAgree.js";

import { ConstructPrimitive } from "./ConstructPrimitive.js";

import { CompareIfThesame } from "./CompareItthesame.js";

// import { Miller_Rabin } from "./MillerRabin.js";

import { BothAgrees } from "./BothAgree.js";


import { TrailDivision } from "./DivisionTrail.js";





 



document.addEventListener("DOMContentLoaded" , ()=>{




const AdaSecretKey = document.getElementById("AdaSecretKey" );

const ObiSecretKey = document.getElementById("ObiSecretKey");



const AdaPrimeNumber = document.getElementById("AdaPrimeNumber");


 const ObiPrimeNumber = document.getElementById( "ObiPrimeNumber");





const  AdaPrimitive = document.getElementById("AdaPrimitive")

const ObiPrimitive = document.getElementById("ObiPrimitive")




const letagree = document.getElementById("letagree");

letagree.disabled = true


 
const letcheck = document.getElementById("letcheck");

letcheck.disabled = true







letcheck.addEventListener("click", ()=>{

// Switched to trial division for now
// Miller_Rabin() 


TrailDivision()


ConstructPrimitive()

BothAgrees()

letagree.disabled = false



})




letagree.addEventListener("click", ()=>{

    LetsAgree()
    
    
    })





})











