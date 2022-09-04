function Pattern10()
{
   let  row = 1;

   let n = 3;

   let string = "";

   while(row<=n)
   {
    let col = 1;


      while(col<=n)
      {
        // let ch = 'A'+ row - 1;
        string += String.fromCharCode((row - 1) + 65); + " ";

        col = col + 1;

      }
      string +="\n";
      row = row + 1;

   }

   console.log(string)
}

Pattern10();