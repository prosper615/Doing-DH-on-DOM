




// I want to first compare if the values of prime and primitive root are the same before enabling the button
// which checks for primality and if they are primitive root of the prime


export function CompareIfThesame (){

if(ObiPrimeNumber.value === AdaPrimeNumber.value && ObiPrimitive.value === AdaPrimitive.value && ObiPrimeNumber.value !== "" && AdaPrimeNumber.value !== "" &&  ObiPrimitive.value !== "" && AdaPrimitive.value !== "" && ObiSecretKey.value !== ""  && AdaSecretKey.value !== ""   ){


letcheck.disabled = false


}

else{


    letcheck.disabled = true


}




}



ObiPrimeNumber.addEventListener("keyup", CompareIfThesame)

AdaPrimeNumber.addEventListener("keyup", CompareIfThesame)

ObiPrimitive.addEventListener("keyup", CompareIfThesame)

AdaPrimitive.addEventListener("keyup", CompareIfThesame)

AdaSecretKey.addEventListener("keyup", CompareIfThesame)

ObiSecretKey.addEventListener("keyup", CompareIfThesame)

