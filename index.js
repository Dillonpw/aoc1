import { readFile } from 'fs/promises';

const fileContent = await readFile(new URL('./data.json', import.meta.url));
const { nums } = JSON.parse(fileContent);

function difference(nums) {
    let even = [];
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }

    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < even.length; i++) {
        sum += Math.abs(even[i] - odd[i]);
    }

    return sum;
}

//const test = [1, 1, 2, 2];
//const result = difference(test);
const result = difference(nums);
console.log(result);
