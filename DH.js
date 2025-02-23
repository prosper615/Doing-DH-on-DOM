
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

// let IterationCount = 0

// it seems like am gonna put the results into an array in order to keep a count of them


let PutInArray = [];

let EquatingPowerK 

let EquatingPowerM






while( P % (TheBase ** TheExponent ) === 0 ){

    let TheResultOfDiv = P / ( TheBase** TheExponent) 

    console.log( `${TheResultOfDiv}`)


    PutInArray.push(TheResultOfDiv)


   TheExponent++



     
}

 
EquatingPowerK = PutInArray.length

console.log(EquatingPowerK)

EquatingPowerM = EquatingPowerK + 1

// console.log( EquatingPowerM)

let TheRemainder = P / TheBase ** EquatingPowerK

console.log( TheRemainder)







// Now checking for eqaulity based on a formula in Miller-Rabin computation

if( P === 2**EquatingPowerK * TheRemainder ){


    console.log( "Am a computer wizard")


}


else {

console.log( "I love software engineering and also to hack on cool stuffs ")
 

}


// Now there is more steps to take here

// Via the formula for computing Miller-Rabin primality test, we must find a number which satisfies below

// let call the number T. 1 < T < n-1

//  Implementing the condnition above

let T = Math.floor(Math.random() * (P - 2)) + 2

if( T < P){

console.log("The test  have been passed " )


}

else{

console.log( "Let's find another approach")



}

// Now am going into the next step of checking for prime using Miller-Rabin algorithm







}




Miller_Rabin ( 561 )







// What is the difference and effect of the two different approach in a code below



// console.log(2**3);

// console.log( Math.pow( 2, 3))



// Testing something

const NotBeyond = 8;

const TestNotBeyond = Math.floor( Math.random() * (NotBeyond - 2)) + 2

console.log( TestNotBeyond)






