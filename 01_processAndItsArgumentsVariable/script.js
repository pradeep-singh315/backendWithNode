const vegetable = "Potato"

const sum = (a, b) => {
    return a+b
}

const ans = sum(8, 12)
console.log(ans);

console.log(process);

const arrayProcess = process.argv
console.log(arrayProcess);

for(i = 2; i < arrayProcess.length; i++) // ----> Because first two values are fixed
{
    console.log(`Hello to ${arrayProcess[i]}`);
}