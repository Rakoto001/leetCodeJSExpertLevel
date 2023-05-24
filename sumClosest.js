
/**
 * 
 * link : https://leetcode.com/problems/3sum-closest/
 */



 /**
  * chercher les 3 chiffres sumClosest
  * @param {array} aCheck 
  * @param {int} reference 
  */
function fincdSumClosest(aCheck, reference) {

    let valueBase = 1000;
    let tmpRes;

    for (let indexTocheck = 0; indexTocheck<aCheck.length ;indexTocheck++) {

        // calculer la difference:
        let difference = reference - aCheck[indexTocheck];

        difference = this.makePositive(difference);

        if (difference < valueBase ) {

            valueBase = difference;
            tmpRes = aCheck[indexTocheck]

        }

    }

  
    return tmpRes;
}


/**
 * make params > 0
 * @param {int} params 
 */
function makePositive(params) {

    if (params < 0) {
        
        return Math.abs(params);
    }

    return params;
    
}


/**
 * arrangement des arrays
 */
function arrayrArrange() {

    // const aCheck = [2,6,5,8, 29,3,7];
    const aCheck = [-1,2,1,-4];
   
    let threeNumbersCombinaison;
    let additionalValueTocheck;
    let tmp_Closest;
    let indexClosestSum;

    let a_tmp_aValueToAdd = [];
    let a_tmp_resAdditionalValue = [];

   

    for (let ppleIndex = 0; ppleIndex < aCheck.length; ppleIndex++) {

        for (let nextIndex = ppleIndex + 1; nextIndex < aCheck.length; nextIndex++) {

            for (let lastIndex = nextIndex+1; lastIndex < aCheck.length; lastIndex++) {

                threeNumbersCombinaison =[].concat(aCheck[ppleIndex] , aCheck[nextIndex], aCheck[lastIndex] )
                a_tmp_aValueToAdd.push(threeNumbersCombinaison);
                // additionner les 3 nombres et le resultat sera calculé pour avoir la distance la plus courte
                additionalValueTocheck = makeSumArray(threeNumbersCombinaison);
                a_tmp_resAdditionalValue.push(additionalValueTocheck)
                
            }
           
        }
        
    }

    tmp_Closest = this.fincdSumClosest(a_tmp_resAdditionalValue, 1);

    // la taille du tableau  a_tmp_resAdditionalValue et a_tmp_aValueToAdd sont les memes , et donc meme index
    //  en conséquence on recherche l'index du sumClosest
    //  puis on recherche 
    indexClosestSum = (a_tmp_resAdditionalValue.indexOf(tmp_Closest))
    console.log(a_tmp_aValueToAdd[indexClosestSum]);

    debugger

   

    
}


/**
 * 
 * @param {*} aNumbers 
 */
function makeSumArray(aNumbers) {
    let sumNums = 0;

    for (let valueNumb = 0; valueNumb < aNumbers.length; valueNumb++) {
        sumNums += parseInt(aNumbers[valueNumb]) ;
    }

     return sumNums;
    
}


// console.log(fincdSumClosest());

arrayrArrange();