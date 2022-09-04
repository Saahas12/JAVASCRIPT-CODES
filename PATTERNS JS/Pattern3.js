function Pattern3()
{
    let n = 4;

    let i = 1;

    let string = "";

    while(i<=n)
    {
        let j = 1;
        while(j<=n)
        {
            string += j;
            

            j  = j + 1;
        }
        
        string += "\n";
        //string += "\n";
        i = i + 1;

        
    }
    console.log(string);
}

Pattern3();