function multipleTF(){

    let n = 20;

    for(let i = 0; i<=20; i++)
    {
        if(i%3 == 0 && i%5 == 0){

            console.log("TF");
        }

        else if(i%3 == 0)
        {
            console.log("T");
        }

        else if(i%5 == 0)
        {
            console.log("F");
        }
        else
        {
            console.log(i);
        }
    }

}

multipleTF();