let number = 1;

// while (number <=100)
// {
//     console.log(number);
//     number++;
// }
// while (number <=100)
// {
//     if (number == 50)
//     {
//         console.log("CHEGA!");
//         break;
//     }
//     console.log(number);
//     number++;
// }

while (number <=10)
{
    number++;
    
    if (number % 2 === 0)
    {
        console.log(number ,"é PAR");
        continue;
    }

    console.log(number, "é ÍMPAR");

}

