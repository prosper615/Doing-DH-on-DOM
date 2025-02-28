
// Here am trying to simply implement Deffie-Hellman crytography in a simple way. This is the way it usually 
// works with exceptions of some little other stuffs. Showing this on the Dom is simply stupid of me and my 
// stupid codes are just so stupid




const AdaSameSecretKey = document.getElementById("AdaSameSecretKey" );

const ObiSameSecretKey = document.getElementById("ObiSameSecretKey");


const AdaPrimeNumber = document.getElementById("AdaPrimeNumber");

 const ObiPrimeNumber = document.getElementById( "ObiPrimeNumber");






const AdaSubmit = document.getElementById("AdaSubmit");

const ObiSubmit = document.getElementById("ObiSubmit");



// It seems like stuff enclosed in HTML form has some anamalous behaivour. 
// Commenting so i can remember to check it out later






function BothAgrees () {


    let GetObiPrimeNumber = ObiPrimeNumber.value;

    let GetAdaPrimeNumber =  AdaPrimeNumber.value;


    console.log( GetObiPrimeNumber)

    console.log( GetAdaPrimeNumber)



     if( GetObiPrimeNumber == "" || GetAdaPrimeNumber == "" ) {

        console.log( " Each parties must input an agreed prime number (preferably a large prime). None should be empty")
        
        
            }


  else  if(  GetObiPrimeNumber ==  GetAdaPrimeNumber){

console.log( ` ${GetObiPrimeNumber}  is equal to ${ GetAdaPrimeNumber}. You both agreed on the same prime number`)

    } 

    else if( GetObiPrimeNumber !==  GetAdaPrimeNumber){

        console.log( ` ${GetObiPrimeNumber}  is  not equal to ${ GetAdaPrimeNumber}. You both did not agree on the same prime number`)

    } 
    
}




AdaSubmit.addEventListener("click", ()=>{

    BothAgrees () 

});







ObiSubmit.addEventListener("click" , ()=>{
    
    // This function placed here is for testing, would delete later

    CheckPrimitiveRoot () 




})



// I think i should write a code which checks for wheather the input is a prime number or not

// It's hard to test for prime numbers so am looking for an algorithm that would be cool with that

// Pardon me, its very challenging to test for prime numbers for so many reasons ( From research and books i consulted)

// Despite the challenge some algorithms have been developed to test if a number is prime or not

//  Like Trial division, Miller-Rabbin Primality test etc

// Pls sorry for so much comments, its part of the stupid codes. Lol






//  Now am trying to implement Miller-Rabin primality test 


function Miller_Rabin ( N ) {


let P = N - 1

let TheBase = 2

let TheExponent = 1


let PutInArray = [];

let EquatingPowerK 



while( P % (TheBase ** TheExponent ) === 0 ){

    let TheResultOfDiv = P / ( TheBase** TheExponent) 

    console.log( `${TheResultOfDiv}`)


    PutInArray.push(TheResultOfDiv)


   TheExponent++

     
}



EquatingPowerK = PutInArray.length


let TheRemainder = P / TheBase ** EquatingPowerK


// P should be equal to ... as shown : P === 2**EquatingPowerK * TheRemainder


// Via the formula for computing Miller-Rabin primality test, we must find a number which satisfies below

// let call the number T.  The condition to be fuffilled : 1 < T < n-1

//  Implementing the condition  above with the code below

// let T = Math.floor(Math.random() * (P - 2)) + 2

let T = 2// using 2 tempoarily to confirm some certain calculations


// Now am going into the next step of checking for prime using Miller-Rabin algorithm


let CompositeOrPrime = T ** TheRemainder  %  N

console.log(CompositeOrPrime);


// Now implementing the condition that checks if the number is a prime numbe ror a coprime


// This else statement is tricky here cos we are checking if the remainder is 

// -1 which is equivalently to N-1, but in terms of how programming lang..s works 



if( CompositeOrPrime % N == 1){

    console.log("This is a composite number " )
    
    
    }
/*

else if( CompositeOrPrime % N == N - 1 ){



console.log( "This is probably a prime numbber " + "\n" + "This is due to the presence of a kind of number could pass the primality test known as Carmicheals number")

}

*/


else{

// Remember  CompositeOrPrime = T ** TheRemainder  %  N as s ealier indicated

  let HoldItTemp = CompositeOrPrime


  console.log ( `This is ${HoldItTemp}`)

while( HoldItTemp !== 1   /* || HoldItTemp !== N-1  */ ){

    HoldItTemp = HoldItTemp ** 2 % N;

console.log(HoldItTemp)




if( HoldItTemp === 1){

console.log("This is a composite number ")

}

else {

console.log( "Maybe it's not a composite  number")


}

/*
// else if (HoldItTemp === N - 1) {

// console.log("This is probably a prime number. " + "\n" + "This is due  Carmicheal's numbers which could pass the primality test  ")




// }


*/




}





}




}


Miller_Rabin ( 561 )

// Miller_Rabin(7)

// Miller_Rabin(997)





// Checking if the selected number is really the primitive root below


const  AdaPrimitive = document.getElementById("AdaPrimitive")

const ObiPrimitive = document.getElementById("ObiPrimitive")



// Now it seems like am gonna implement this using a function

function CheckPrimitiveRoot () {


let GetObiPrimitiveValue = ObiPrimitive.value


let  GetAdaPrimitiveValue = AdaPrimitive.value 

console.log( GetObiPrimitiveValue)

console.log(GetAdaPrimitiveValue)

if( GetAdaPrimitiveValue !== GetObiPrimitiveValue ){

console.log("They did'nt choose the same primitive root for the prime")

}

else{

console.log("Your primitive roots are the same")

}



}




// Now its time to check if the number choosen is really the primitive root of the prime number



function ConstructPrimitive () { 
  
let GetObiPrimeNumber = ObiPrimeNumber.value;

let GetAdaPrimeNumber =  AdaPrimeNumber.value;

let IfTheyareEqual



if ( GetObiPrimeNumber == GetAdaPrimeNumber){

IfTheyareEqual = GetObiPrimeNumber   // i can  also equate it to AdaPrimeNumber since they are equal

// If the choosen primitive roots are equaal then this has to happen to it


let GetObiPrimitiveValue = ObiPrimitive.value

let InitialIterating = 1   // This is as a result of the formula

let InitialIteratingStop = IfTheyareEqual - 1


let PushSeePrimitiveResults = []


while( InitialIterating <= InitialIteratingStop){



    let SeePrimitive = GetObiPrimitiveValue ** InitialIterating % GetObiPrimeNumber


     PushSeePrimitiveResults.push(SeePrimitive)

    console.log( "Checking primitive root ")


    InitialIterating++




}


console.log(PushSeePrimitiveResults)

let DuplicateCompare = new Set(PushSeePrimitiveResults)

console.log( DuplicateCompare)



if( PushSeePrimitiveResults.length == DuplicateCompare.size){

console.log( `This is the primitive prime of the number ${IfTheyareEqual}`)



}

else{

    console.log( `This is not the primitive prime of the number ${IfTheyareEqual}`)

}



}


else{

console.log("Ada and Obi should choose the samme prime number" )


}



}




const TestCongrugence = 69


if ( TestCongrugence - 1  % TestCongrugence  === - 1){


console.log("I love crytography so much" )


}

else{

console.log( "Am a blockchain wizard")


}



console.log( -1 % 5)




  







