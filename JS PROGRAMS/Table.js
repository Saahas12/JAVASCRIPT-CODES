
function Table(){

    let n = 7;


    

    for(i = 1; i<=n; i++)

    {
        let arr2 = [];


        for(j = 1; j<=n;j++)
        {
            process.stdout.write((i + "*" + j + "=" + i*j).toString() + " ");
        }

        console.log();   
    }
    
}


Table();