function Pattern12()
{
    let row = 1;

    let string = "";

    let n = 3;

    let count = 1;

    while(row<=n)
    {
        let col = 1;

        while(col<=n)
        {
            string += String.fromCharCode((count-1) + 65);

            count = count + 1;

            col = col + 1;
        }

        string += "\n";

        row = row + 1;
        
        console.log(string);
    }
}

Pattern12();