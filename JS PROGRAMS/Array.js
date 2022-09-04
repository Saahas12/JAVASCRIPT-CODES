// const arr = [3,5,5,28];

// arr.sort(function(a,b){return b-a});

// console.log(arr[0]);




function myarr(arr){
    return Math.max.apply(null,arr);
}

console.log(myarr([40, 100, 1, 5, 25, 10]))