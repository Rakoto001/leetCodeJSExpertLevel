/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

 /**
  * Given two sorted arrays nums1 and nums2 of size m and n respectively,
  *  return the median of the two sorted arrays.
  * @param {array} aNums1 
  * @param {array} aNums2 
  */
function medianTwoArrays(aNums1, aNums2) {
    
    let aCombinaisons = aNums1;

    aCombinaisons.push(...aNums2);

    this.checkOddOrEven(aCombinaisons);
    
}



/**
 * tester si valeur pair ou impair
 * @param {int} aCombinaisons 
 */
function checkOddOrEven(aCombinaisons) {

    if ( aCombinaisons && aCombinaisons.length>0) {

        return this.isEven(aCombinaisons);

        
    } else {

        throw new Error('Parameter is not a defined!');
    }

    return 0;
}


/**
 * determine la valeur medium de l'array
 * @param {array} aCombinaisons 
 */
function determineMedianEven(aCombinaisons) {

    const middleIndex = Math.ceil(aCombinaisons.length / 2);
    
    const firstHalf   = aCombinaisons.splice(0, middleIndex);   
    const secondHalf  = aCombinaisons.splice(-middleIndex);
    const FIRST_INDEX = 0;

    let tmpMedium;

    // l'index max du premier tableau:
    const indexMaxFirst = (firstHalf.length)-1;

    // calcul de la valeur medium
    tmpMedium = ( (firstHalf[indexMaxFirst]) + (secondHalf[FIRST_INDEX])) / 2;


    return tmpMedium;
    
}


/**
 * traitemnt pour cas impair ou pair
 * @param {array} aCombinaisons 
 */
function isEven(aCombinaisons) {

    let tmp_solution;

    if(aCombinaisons.length % 2==0){
        
        tmp_solution = this.determineMedianEven(aCombinaisons)

     } else {

        tmp_solution = this.determineMedianOdd(aCombinaisons)

     }
    
    return tmp_solution;
}




medianTwoArrays([1,3], [2,7])