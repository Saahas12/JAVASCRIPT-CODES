// let arr = (1,2,3)

// console.log(Math.max(arr));

let arr = [30,121,43,65,141];

console.log(Math.max(...arr))


// var items = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];

// console.log(Math.min(...items));


// const arr = [
//     [1, 16, 34, 48],
//     [6, 66, 2, 98],
//     [43, 8, 65, 43],
//     [32, 98, 76, 83],
//     [65, 89, 32, 4],
//  ];
//  const constructBig = arr => {
//     return arr.map(sub => {
//        const max = Math.max(...sub);
//        return max;
//     });
//  };

//  console.log(constructBig(arr));

const myArray = [20, 23, 27,42];

let maxElement = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

console.log(maxElement); 