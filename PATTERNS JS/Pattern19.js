function Pattern19()
{
    let n = 4;

    let string = "";

    //let row = 1;

    //let start = n - row;

    for(let row  = n; row>=1;row--)
    {
        for(let col = 1; col<=row; col++)
        {
            string += "*";

            //start--;
        }

        string +="\n";
    }

    console.log(string);
}

Pattern19();