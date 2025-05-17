//    Remove all 0s from [1, 0, 2, 0, 3, 0, 4] and print the new array.
let arr = [1, 0, 2, 0, 3, 0, 4];
let num = 0;
let newarray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
        newarray.push(arr[i]);
    }
}