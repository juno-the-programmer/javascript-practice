function fn(num) {
  console.log(num);
  return num;
}

function* gen() {
  yield fn(1);
  yield fn(2);
  return 3;
}

const g = gen();
console.log(g.next());

console.log(g.next());

console.log(g.next());

/*
Result:
1
{ value: 1, done: false }
2
{ value: 2, done: false }
{ value: 3, done: true }
*/
