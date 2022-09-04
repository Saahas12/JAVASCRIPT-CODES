function Pattern4()
{
    let n = 3;
    let i = 1;

    let count = 1;

    let string = "";

    while(i<=n)
    {
        let j = 1;
        while(j<=n)
        {
            string += count;
            count  = count + 1;

            

            j = j + 1;


        }

        string += "\n";
        i = i + 1;

    }
    console.log(string);
}

Pattern4();