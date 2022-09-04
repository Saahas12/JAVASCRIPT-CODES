function Pattern5()
{

    let n = 4;
    let row = 1;

    let string = "";
    while(row<=n)
    {
        let col = 1;

        while(col<=row)
        {
            string += "*";

            col = col + 1;
        }

        string += "\n";


        row = row + 1;

        
    }
    console.log(string);
}

Pattern5();