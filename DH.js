


// Here am trying to simply implement Deffie-Hellman crytography in a simple way. This is the way it usually 
// works with exceptions of some little other stuffs. Showing this on the Dom is simply stupid of me and my 
// stupid codes are just so stupid




const AdaSameSecretKey = document.getElementById("AdaSameSecretKey" );

const ObiSameSecretKey = document.getElementById("ObiSameSecretKey");


const AdaPrimeNumber = document.getElementById("AdaPrimeNumber");


 const ObiPrimeNumber = document.getElementById( "ObiPrimeNumber");


const AdaSubmit = document.getElementById("AdaSubmit");


const ObiSubmit = document.getElementById("ObiSubmit");





// I think i should write a code which checks for wheather the input is a prime number or not

// It's hard to test for prime numbers so am looking for an algorithm that would be cool with that

// Pardon me, its very challenging to test for prime numbers for so many reasons ( From research and books i consulted)

// Despite the challenge some algorithms have been developed to test if a number is prime or not

//  Like Trial division, Miller-Rabbin Primality test etc

// Pls sorry for so much comments, its part of the stupid codes. Lol






//  Now am trying to implement Miller-Rabin primality test 


// Here is the function that checks if the choosen number is really a prime number

function Miller_Rabin ( N ){

    // let N = ObiPrimeNumber.value 

    // This makes sense cos am going to run the function only when both choosen prime numbers are same

    // Obviously a number less than 2 should not be choosen, though preferably a large prime here in my stupid
   // implementation ( for fun sake) small prime number is accepted
    if(N < 2){

      console.log("Choose a number that is not less than 2")
      
    } 

  
    // So i think i should accept the obvious smallest prime numbers like 2,3,5 without much check
     if ( N ===2 || N===3 || N===5){

console.log( `${N} is a prime number` )

// return

    }

// Not good to waste time doing the primality test without checking if can be divided by the first 10 digits atleast

// If can be divided by the above without remainder obviously means it's not prime
 if (N % 2 !== 0   /*|| N %  3!== 0 || N %  4!== 0 || N %  !5== 0 || N %  6!== 0 || N %  7!== 0  || N %  8!== 0  || N %  9!== 0 || N %  10!== 0 */){

console.log("This is not a prime number")

}

  
    // Should have only used trail division method but having anamalous behaivour with large prime




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

console.log(TheRemainder)


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

    console.log("This is a composite number. Yoo " )
    
    
    }

else if( CompositeOrPrime % N == N - 1 ){



console.log( "This is probably a prime numbber " + "\n" + "This is due to the presence of a kind of number could pass the primality test known as Carmicheals number")

}



else{

// Remember  CompositeOrPrime = T ** TheRemainder  %  N as s ealier indicated

  let HoldItTemp = CompositeOrPrime


//   console.log ( `This is ${HoldItTemp}`)

while( HoldItTemp !== 1    /* HoldItTemp !== N-1 */   ){

    HoldItTemp = HoldItTemp ** 2 % N;

// console.log(HoldItTemp)


if( HoldItTemp === 1){

console.log("This is a composite number  !!")

}



// Seems like the condition below is not the suppose way of getting the remainder to be equivalent to -1
  else  if(HoldItTemp === -1 )  {

    console.log("This is probably a prime number. " + "\n" + "This is due  Carmicheal's numbers which could pass the primality test  ")



}


}



}

}












Miller_Rabin ( 561 )

// Miller_Rabin(3)

// Miller_Rabin(997)

// Miller_Rabin(53)










// Here am checking if both selected the same primitive root. cos both primitive roots must be the same


const  AdaPrimitive = document.getElementById("AdaPrimitive")

const ObiPrimitive = document.getElementById("ObiPrimitive")



// Now it seems like am gonna implement this using a function

function CheckPrimitiveRootThesame () {


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

    
    InitialIterating++


}


let DuplicateCompare = new Set(PushSeePrimitiveResults)


if( PushSeePrimitiveResults.length == DuplicateCompare.size){

console.log( `This is the primitive prime of the number ${IfTheyareEqual}`)


}

else{

    console.log( `This is not the primitive prime of the number ${IfTheyareEqual}`)

}



}




}




// This function below is the one that checks if both agrees on the same prime number

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

        console.log( ` ${GetObiPrimeNumber}  is  not equal to ${ GetAdaPrimeNumber}. You both did not agree on the same pre prime number`)

    } 
    
}












function ChainAll () {

    // This function below is the one that checks if the choosen primitive roots are the same

    CheckPrimitiveRootThesame () 



    // The function below is the one that checks if both agrees on the same prime number

BothAgrees () 


// This first function is the one that checks for the accuracy of the primitive root

ConstructPrimitive () 


/*
let AccessObiPrime = ObiPrimeNumber.value;

let AccessAdaPrime = AdaPrimeNumber.value


// I want to take the test on primality only if the prime number input is the same

if( AccessObiPrime ==  AccessAdaPrime){


    Miller_Rabin ( )

}

else {


console.log("Both you should agree on the same prime number" )

}

*/


}