import {piValue, sum} from "./mathFile.js"

const ans = sum(9, 11)
console.log(ans);
console.log(piValue);

// Generating new words..

import { generate } from "random-words";

//generate() -----> Generate new words...

for(let i = 0; i <= 10; i++)
{
    console.log(generate());
}