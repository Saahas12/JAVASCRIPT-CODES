function Pattern1()
 {
//     let n = 3;

//      let i = 1;
//      let string = "";
//      while(i<=n)
//      {
//         let j = 1;

//         while(j<=n)
//         {
//             string += "*";

//             j = j + 1;
//         }
//         string += "\n";
        

//         i = i + 1;
//      }

//      console.log(string);

let n = 3;

let string = "";

    for(let i = 1; i<=n;i++)
    {
        for(let j = 1;j<=n;j++)
        {
            string += "*";
        }
        string += "\n";

    }
    console.log(string);
}

Pattern1();