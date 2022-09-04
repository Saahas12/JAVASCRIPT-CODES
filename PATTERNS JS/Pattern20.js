function Pattern20()
{
    let row = 1;

    let n = 4;

    let string = "";

    let space = 1;

    for(row = n; row>=1; row--)
    {
        for(space = 1; space <= row - 1; space++)
        {
            process.stdout.write(' ');
        }

        for(let star = 0; star < n - row + 1; star++)
        {
            process.stdout.write('*');
        }

        process.stdout.write('\n');
    }
}

Pattern20();