function ArrayChallenge(arr){

    
        
    let sum = 0;

    for(i=0;i<arr.length;i++){ 

        sum = sum +arr[i];

        if(sum > arr[i+1]){
            return false;
        }
    }

    return true;
}

console.log(ArrayChallenge([1,3,6,13,54]))


// function divide(num1, num2){

//     console.log(num1/num2).toFixed(4)
// }
