function Pattern18()
{
    let n = 4;

    let row = 1;

    let string = "";

    let space = n - row;

    while(row<=n)
    {
        while(space)
        {
            string += " ";

             space--;

        }

        let col = 1;

        while(col<=row)
        {
            string+= "*";

            col = col + 1;
        }

        string +="\n";

        row = row + 1;
    }

    console.log(string);
}

Pattern18();