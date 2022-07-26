/*
ES2015
Generator functions are written using the function* syntax.
*/
function* gen() {
  yield 5;
  yield 3;
  yield 2;
  return 4;
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

/*
{ value: 5, done: false }
{ value: 3, done: false }
{ value: 2, done: false }
{ value: 4, done: true } // true means Return value 

*/
