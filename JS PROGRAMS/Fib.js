function Fib()
{
    let n = 10;

    let a = 0;

    let b = 1;

    let string = "";

    string+= a + " "+b+" ";
    for(let i  = 0; i<n;i++)
    {
        let nextNumber = a+b;

        string+= nextNumber+" ";

        a = b;

        b = nextNumber;
    }

    console.log(string);
}

Fib();