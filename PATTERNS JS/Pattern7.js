function Pattern7()
{
    let row = 1;

    let n = 4;

    let string = "";

    let count = 1;

    while(row<=n)
    {
        let coln = 1;
        while(coln<=row)
        {
            
            string +=count+" ";
            count  = count  + 1;
            

            coln = coln  + 1;
        }

        string +="\n";
        row = row + 1;
    }

    console.log(string)
    
}

Pattern7();