// for the package we need to get the user input at line 2
const prompt = require('prompt-sync')();


 const RWS = 3;
 const CLMS = 3;
     
    const SYMBOL_COUNT ={
        'A':2,
        'B':4,
        'C':6,
        'D':8
    }

    const SYMBOL_VALUE ={
        'A':5,
        'B':4,
        'C':3,
        'D':2
    }

    const deposit =() => {

        while(true){
     const makeDeposit = prompt('ENTER AMOUNT : ');
          //  passing the input number  to a parseFloat 
     const numberMakeDeposit = parseFloat(makeDeposit);

         if(isNaN(numberMakeDeposit) || numberMakeDeposit <= 0){
     console.log(' PLEASE ENTER A VALID NUMBER OF THE MONEY! ');
           }else{
                  return numberMakeDeposit;
                }
        }  
    }


    const getNumberOfLines =() => {
        
        while(true){
            const putlines = prompt('ENTER NUMBER OF LINES (1-3): ');
        //  passing the input number  to a parseFloat 
         const numberOfLines = parseFloat(putlines);
        
         if( isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3 ){
            console.log(' PLEASE ENTER A VALID NUMBER OF LINES  ');
          }else{
            return numberOfLines;
            }
        }
    }
        const getBet = (balance,Lines) =>{
            while(true){
                const makeBet = prompt('ENTER TOTAL BET PER LINE : ');
              //  passing the input number  to a parseFloat 
               const numberMakeBet = parseFloat(makeBet);
            
                  if(isNaN(numberMakeBet) || numberMakeBet <= 0 || numberMakeBet > (balance/Lines)){
                console.log(' PLEASE ENTER A VALID NUMBER OF TOTAL BET PER LINE ');
                   }else{
                        return numberMakeBet;
                     }
             }
        }
 const balance = deposit();
 const Lines = getNumberOfLines();
  const totalBet = getBet(balance,Lines);
    console.log(totalBet);