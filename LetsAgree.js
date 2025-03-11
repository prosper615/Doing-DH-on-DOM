








 export function LetsAgree () {



const SecretKeyDisplay = document.createElement("p")


document.body.appendChild(SecretKeyDisplay)
 

    // The formula for the value which both parties compute is and sends to each o ther if
    // it in irl usecase implementation is :
    //  agreed primitive of the choosen agreed prime raised to power the secret key modular the choosen agreed prime


const AdaSecretKeyValue = AdaSecretKey.value;
// This is the value Ada sends Obi irl scenario. 
const AdaSendValue = AdaPrimitive.value ** AdaSecretKeyValue % AdaPrimeNumber.value






const ObiSecretKeyValue = ObiSecretKey.value

// This is the value Obi sends to Ada irl scenario
const ObiSendValue =  ObiPrimitive.value ** ObiSecretKeyValue % ObiPrimeNumber.value;



// Now the next step is Obi and Ada's computation respectively

// irl/ in useable scenario

// Obi computes  AdaSendValue**ObiSecretKeyValue % ObiPrimeNumber.value ( yeah, same as agreed prime cos both
// must agree on the same prime so Obi's prime same as Ada)  and vice versa


   const ObiComputes =  AdaSendValue**ObiSecretKeyValue % ObiPrimeNumber.value;

   const  AdaComputes = ObiSendValue ** AdaSecretKeyValue % AdaPrimeNumber.value;

 

 SecretKeyDisplay.textContent = `Obi's Secret Key is ${ObiComputes} and Ada's Secret Key is ${AdaComputes}`;
 SecretKeyDisplay.style.color = "green"
 SecretKeyDisplay.style.fontSize = "1.5rem"





 const OtherNotes = document.createElement("p")


 document.body.appendChild(OtherNotes)



 OtherNotes.textContent = `
The two computations by Obi and Ada is going to result in the same value which is their secret key. 
That's the trick of Deffie-Hellman key exchange. 
Determining the values that were computed to yield the secret key is called the Deffie-Hellman problem.
Determining the secret key from the values computed is called the Discrete Logarithm problem.
`
;




OtherNotes.style.fontFamily = "'Roboto', sans-serif"
OtherNotes.style.color = "#2c3e50";  
OtherNotes.style.fontSize = "1.2rem";
OtherNotes.style.lineHeight = "1.8";  
OtherNotes.style.padding = "20px";  
OtherNotes.style.backgroundColor = "#ecf0f1";  
OtherNotes.style.borderRadius = "8px"; 
OtherNotes.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";  
OtherNotes.style.textAlign = "left";  
OtherNotes.style.maxWidth = "600px";
OtherNotes.style.margin = "20px auto"; 

 




}






