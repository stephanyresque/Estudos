const number = 25;

if (number % 2 == 0)
{
    console.log("número par!");
}else
{
    console.log("número ímpar!");
}

const nt = 10;

if (nt >= 8.5)
{
    console.log("Aprovado com mérito!");
}else if ( (nt < 8.5) & (nt >= 6) )
{
    console.log("Aprovado!");
}else
{
    console.log("Reprovado!");
}


const animal = "gato";

switch(animal)
{
    case "gato":
        {
            console.log("miau");
            break;
        }
    case "cachorro":
        {
            console.log("dog");
            break;
        }
    
}