console.log("Hello Word");

function main()
{
    const person = {
        name : "Stephany",
        age : 21,
        isResearcher : true,
    }

    const {name, age} = person;

    console.log(name, age);
}
main();

const math = require("./functions/modulos");
const { sum } = require("./functions/modulos");

console.log(
    math.sum(4, 5)
);

console.log(
    sum(4, 5)
);

import {sum} from "./functions/modulos.js";
import math from "./functions/modulos.js";

console.log(math.sum(4, 5));

import "./functions/hello.js"