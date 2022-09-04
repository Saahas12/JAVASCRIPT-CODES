function pattern16JS()
{
    let row = 1;

    let n = 4;

    let string = "";
    
    //let start = 'A';

    for(row = 1; row<=n; row++)
    {
        for(let col = 1; col<=row;col++)
        {
            string+= String.fromCharCode((row+col-2)+65)+" ";
        }

        string+="\n";
    }

    console.log(string);
}

pattern16JS();