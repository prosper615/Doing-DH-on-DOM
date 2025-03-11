


// This function below is the one that checks if both agrees on the same prime number

 export function BothAgrees () {


const PrimesameDisplay = document.createElement("p")


    document.body.appendChild(PrimesameDisplay)



    const AdaPrimeNumber = document.getElementById("AdaPrimeNumber");

    const ObiPrimeNumber = document.getElementById( "ObiPrimeNumber");


    let GetObiPrimeNumber = ObiPrimeNumber.value;

    let GetAdaPrimeNumber =  AdaPrimeNumber.value;


     if( GetObiPrimeNumber == "" || GetAdaPrimeNumber == "" ) {


    // yeah there is a code that have already validated this. just want to leave this here . lol

        PrimesameDisplay.textContent = " Each parties must input an agreed prime number (preferably a large prime). None should be empty"
        
        PrimesameDisplay.style.color = "red"    
            }


  else  if(  GetObiPrimeNumber ==  GetAdaPrimeNumber){

PrimesameDisplay.textContent = ` ${GetObiPrimeNumber}  is equal to ${ GetAdaPrimeNumber}. You both agreed on the same prime number`
 PrimesameDisplay.style.color = "blue"


} 


    else if( GetObiPrimeNumber !==  GetAdaPrimeNumber){

PrimesameDisplay.textContent = ` ${GetObiPrimeNumber}  is  not equal to ${ GetAdaPrimeNumber}. You both did not agree on the same pre prime number`

PrimesameDisplay.style.color = "red"
    } 
    
}