function pop()
{
    let string = ['I','am','Saahas'];//I m Sh

    let st1 = "";

    for(i = 0; i<3; i++)
    {
        let element = string.pop();

        //string.unshift(element);

        st1 += element+ " ";//st1 + element
    }




    console.log(st1);



}

 pop();


// function rotateRight(arr,rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i <=rotations.length;i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     // //return arr;
//     // console.log(arr);

//     let string = "";


//     string += arr;


//     console.log(string);
//   }
//   rotateRight([2,3,4,5,7], 3); 
//   rotateRight([44, 1, 22, 111], 5);