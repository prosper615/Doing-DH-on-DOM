



/* Would use Trail division method for Checking the for prime numbers,

 i found so many bugs in the Rabin Miller implementation, would try reimplementing again
 
 Rabin Miller is usually a good fit than Trail Division for  large prime numbers


 */

 

// Trial division is usually suituable for small prime numbers and not big ones

  export function TrailDivision() {

    const TrailDivisionDisplay = document.createElement("p");

    document.body.appendChild(TrailDivisionDisplay);

    let Trail =  ObiPrimeNumber.value 

    if (Trail < 2) {


        TrailDivisionDisplay.textContent = "Choose a number that is not less than 2"

        TrailDivisionDisplay.style.color = "red"

    } else {

        let SquarerootOfValue = Math.sqrt(Trail);

        // Making it to the nearest number so it can be used for the algorithm, thats the rule of trial division

        let ToFloor = Math.floor(SquarerootOfValue);

        let FirstDivisor = 2;

        let isPrime = true;

        while (FirstDivisor <= ToFloor) {

            

            if (Trail % FirstDivisor === 0) {


                TrailDivisionDisplay.textContent = "This is not a prime number"

                TrailDivisionDisplay.style.color = "red"


                isPrime = false;


                break;
            }

            FirstDivisor++;
        }

        if (isPrime) {
            TrailDivisionDisplay.textContent = "yeah , it's a prime number"

            TrailDivisionDisplay.style.color = "blue"
            
        }


    
    }
}



