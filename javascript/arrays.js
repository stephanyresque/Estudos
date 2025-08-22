const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[3]);

const names = ["Ste", "Nath", "Karla", "Lero"];
console.log(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[2] = "João"

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names.length)

names.push("Maria");
console.log(names);

let lastName =  names.pop();
console.log(names);
console.log(lastName);

names.shift();
console.log(names);


names.unshift("Stephany");
console.log(names);

const myArray = [1, 24, "Ste", 5.7, "ué"];
console.log(myArray);
