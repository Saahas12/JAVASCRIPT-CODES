function Pattern11()
{
    let row = 1;

    let n = 3;

    let string = "";

    while(row<=n)
    {
        let col = 1;

        while(col<=n)
        {
            string += String.fromCharCode((col-1) + 65);

            col = col + 1;
        }

        string +="\n";

        row = row + 1;

    }

    console.log(string);
}

Pattern11();