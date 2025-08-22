function greet(name){
    console.log("Seja bem vindo,", name);
}

greet("Ste")

function sum(a, b){
    return a + b;
}

let result = sum(20, 7);
console.log(result);

const sub = (a, b) => a - b;
result = sub(24, 4);
console.log(result);

function factorial(number)
{
    let init = 1;
    for(let i = 1; i <= number; i++)
    {
        init *= i;
    }
    console.log(init);
}

factorial(8);

((name) => {
    console.log("Seja bem-vindo(a),", name);
})("Ste")

function pow(number, exp = 2)
{
    return number ** exp;
}

console.log(pow(2));
console.log(pow(2, 4));