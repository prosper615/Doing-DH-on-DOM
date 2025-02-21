
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

















