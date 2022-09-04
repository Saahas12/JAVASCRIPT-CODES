function Pattern6()
{
    let row = 1;

    let n = 4; 

    let string = "";

    while(row<=n)
    {
        let col = 1;

        while(col<=row)
        {
            string += row;

            col = col + 1;

        }
        string += "\n";
        
        row = row + 1;

    }

    console.log(string);
    
}

Pattern6();