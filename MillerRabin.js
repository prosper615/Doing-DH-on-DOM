



// It's hard to test for prime numbers so am looking for an algorithm that would be cool with that. lol

// Pardon me, its very challenging to test for prime numbers for so many reasons, like Carmicheals numbers ( From research and books i consulted)

// Despite the challenge some algorithms have been developed to test if a number is prime or not

//  Like Trial division, Miller-Rabbin Primality test etc

// Pls sorry for so much comments, its part of the stupid codes. Lol



//  Now am trying to implement Miller-Rabin primality test 


// Here is the function that checks if the choosen number is really a prime number

  export function Miller_Rabin (  ){

    const MillerRabinDisplay = document.createElement("p")


    document.body.appendChild(MillerRabinDisplay)


    

    let N = ObiPrimeNumber.value 

    // This makes sense cos am going to run the function only when both choosen prime numbers are same

    // Obviously a number less than 2 should not be choosen, though preferably a large prime here in my stupid
   // implementation ( for fun sake) small prime number is accepted
    if(N < 2){

      MillerRabinDisplay.textContent = "Choose a number that is not less than 2"

      MillerRabinDisplay.style.color = "red"
      
    } 

  
    // So i think i should accept the obvious smallest prime numbers like 2,3,5 without much check
     if ( N ===2 || N===3 || N===5  || N ==7){


MillerRabinDisplay.textContent =     `${N} is a prime number` 
MillerRabinDisplay.style.color = "blue"

return

    }

// Not good to waste time doing the primality test without checking if can be divided by the first 10 digits atleast

// If can be divided by the above without remainder obviously means it's not prime
// Coming back to this should likely be == and not !==. yooo brb
 if (N % 2 == 0   || N %  3 == 0 || N %  4 == 0 || N % 5== 0 || N %  6 == 0 || N %  7== 0  || N %  8== 0  || N %  9== 0 || N %  10== 0 ){

MillerRabinDisplay.textContent =     `${N} is  not a prime number` 
MillerRabinDisplay.style.color = "red"

}

  
    // Should have only used trial division method but having anamalous behaivour with large prime

else{

let P = N - 1

let TheBase = 2

let TheExponent = 1


let PutInArray = [];

let EquatingPowerK 

while( P % (TheBase ** TheExponent ) === 0 ){

    let TheResultOfDiv = P / ( TheBase** TheExponent) 

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

let T = 2// using 2 but normally should have randomly generated T with the above code


// Now am going into the next step of checking for prime using Miller-Rabin algorithm


let CompositeOrPrime = T ** TheRemainder  %  N




// Now implementing the condition that checks if the number is a prime numbe ror a coprime

// This else statement is tricky here cos we are checking if the remainder is 

// -1 which is equivalently to N-1, but in terms of how programming lang..s works  i think a remainder cant equate to -1, right?


if( CompositeOrPrime % N == 1){


    MillerRabinDisplay.textContent =     `${N} is   a composite number. Yoo` 
    MillerRabinDisplay.style.color = "red"
    
    
    }

  



else{

// Remember  CompositeOrPrime = T ** TheRemainder  %  N as s ealier indicated

  let HoldItTemp = CompositeOrPrime



while( HoldItTemp !== 1      ){

    HoldItTemp = HoldItTemp ** 2 % N;



if( HoldItTemp === 1){

MillerRabinDisplay.textContent = `${N} is a composite number`
MillerRabinDisplay.style.color = "red"

}



// Seems like the condition below is not the suppose way of getting the remainder to be equivalent to -1
  else  if(-1=== N - 2 * HoldItTemp )  {

MillerRabinDisplay.textContent=  `${N} is a prime number + "\n" + "This is due  Carmicheal's numbers which could pass the primality test  `

MillerRabinDisplay.style.color = "blue"


}



}


}



}





}





