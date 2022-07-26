function fn(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, num * 1000);
  });
}

function* gen() {
  yield fn(5);
  yield fn(3);
  return 3;
}

const g = gen();
const next1 = g.next();
const next2 = g.next();
const next3 = g.next();

console.log(next1);
console.log(next2);

next1.value.then((res) => {
  console.log(res);
});

next2.value.then((res) => {
  console.log(res);
});

console.log(next3);
/*
Result:
{ value: Promise { <pending> }, done: false }
{ value: Promise { <pending> }, done: false }
{ value: 3, done: true }
3
5
*/
