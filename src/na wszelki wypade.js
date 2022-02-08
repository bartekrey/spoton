//const circles = props.circles;
const circles = props.circles;
console.log(circles);
let array = []
for (let i in circles) {
  array[i] = circles[i].split("-");
}

console.log(array);
let rows = []
let columns = []

for (let i in array) {
  rows.push(array[i][0]);
  columns.push(array[i][1]);

}
console.log(rows);
console.log(columns);
