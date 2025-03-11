








// Now its time to check if the number choosen is really the primitive root of the prime number


   export function ConstructPrimitive () {


    const AdaPrimeNumber = document.getElementById("AdaPrimeNumber");
    const ObiPrimeNumber = document.getElementById( "ObiPrimeNumber");


    const  AdaPrimitive = document.getElementById("AdaPrimitive")
    const ObiPrimitive = document.getElementById("ObiPrimitive")



       const PrimitiveRootDisplay = document.createElement("p")


    document.body.appendChild(PrimitiveRootDisplay)  



    
    let GetObiPrimeNumber = ObiPrimeNumber.value;   
    
    let GetAdaPrimeNumber =  AdaPrimeNumber.value;  
    
    let IfTheyareEqual
    
    
    
    if ( GetObiPrimeNumber == GetAdaPrimeNumber ){
    
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


    PrimitiveRootDisplay.textContent = `${GetObiPrimitiveValue} is the primitive prime of the number ${IfTheyareEqual}`
    PrimitiveRootDisplay.style.color = "blue"   
    
    }
    
    else{

    
    PrimitiveRootDisplay.textContent = `${GetObiPrimitiveValue} is not the primitive prime of the number ${IfTheyareEqual}. Choose the primitive root of the number ${IfTheyareEqual}`

    PrimitiveRootDisplay.style.color = "red"    

    }
    
    
    
    }



   else{

PrimitiveRootDisplay.textContent = "There must be an agreed prime number and choosen promitive root respectively"   

PrimitiveRootDisplay.style.color = "red"    



   }  
    
    
    
    
    }