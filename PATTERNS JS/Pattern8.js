function Pattern8()
{
    let n = 4;

    let row = 1;

    let string = "";

    while(row<=n)
    {
        let col = 1;
        while(col<=row)
        {
            string += row+col-1 +" ";

            col = col + 1;
        }

        string+="\n";
        row = row + 1;
    }

    console.log(string);

}

Pattern8();  