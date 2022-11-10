// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index, (where ), that can be referenced as or

// .

// Reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example
// Return

// .

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

//     int A[n]: the array to reverse

// Returns

//     int[n]: the reversed array

// Input Format

// The first line contains an integer,
// , the number of integers in .
// The second line contains space-separated integers that make up.

// Constraints

// Sample Input 1
// CopyDownload

// Array: arr

// 1 4 3 2

// 4
// 1 4 3 2

// Sample Output 1

// 2 3 4 1

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  // Write your code here
  const newArr = [];
  console.log(a);
  const arr = a.split(" ");
  console.log(arr);
  const length = arr.shift();
  console.log(length);
  console.log(arr);
  for (let i = 0; i < length; i++) {
    newArr.push(arr.pop());
    console.log(newArr);
  }
  return newArr;
}

// function reverseArray(a) {
//     // Write your code here
//     const length = a.length;
//     const arr = [];
// for (let i = 0; i < length; i++) {
//     arr.push(a.pop());
//   }
//   return arr;
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const res = reverseArray(arr);

  ws.write(res.join(" ") + "\n");

  ws.end();
}

reverseArray("4 1 4 3 2");
