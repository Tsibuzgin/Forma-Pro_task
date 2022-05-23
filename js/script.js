// create an array with the two largest elements of the original in descending order
let a = [7,1,2,3,9];
let b = [];
var maxValues = [a[0]];

for (let i = 0; i < a.length; i++) {
  if (a[i] > maxValues[maxValues.length - 1]) {
    maxValues.push(a[i]);
    continue;
  }

  if(a[i] > maxValues[maxValues.length - 2]) {
    maxValues[maxValues.length - 2] = a[i];
  }
}

b[0] = maxValues[maxValues.length - 1];
b[1] = maxValues[maxValues.length - 2];

console.log(b);