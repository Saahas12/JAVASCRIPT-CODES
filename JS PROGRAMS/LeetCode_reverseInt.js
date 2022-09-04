// let n = [1,2,3];
// console.log(n.reverse());


// let n = -123;

// let ans = 0;


// while(n>0)
// {
//     let digit  = n%10;

//     ans = (ans * 10)+digit;

//     n = Math.floor(n /10);


// }

// console.log(ans)

const reverse = function(){

    let x =-123;
    let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; 
        x = parseInt(x/10); 
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
    }
    console.log(revNum);
}

reverse();