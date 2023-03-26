function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  console.log(`Left = ${left}`);
  console.log(`Right = ${right}`);
  return -1;
}

const arr = [2, 4, 6, 8, 10, 12, 14, 15, 20, 23, 43, 56, 78];
const valueToFind = 23;

const result = binarySearch(arr, valueToFind);
if (result === -1) {
  console.log("Value not found in array. Try again");
} else {
  console.log(`Value found at index ${result}.`);
}
