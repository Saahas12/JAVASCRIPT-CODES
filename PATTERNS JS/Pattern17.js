function Pattern17()
{
    let row = 1;
    
    let n = 4;

    let string =" ";

    

    for(row = 1; row<=n; row++)
    {
        for(col = 1;col<=row; col++)
        {
            string+= String.fromCharCode((n-row))+65 +" ";

            
        }

        string+="\n";
    }

    console.log(string);
}

Pattern17();