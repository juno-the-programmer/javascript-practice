function* simpleGenerator() {
  console.log('Before 1');
  yield 1;
  console.log('After 1');
  console.log('Before 2');
  yield 2;
  console.log('After 2');
  console.log('Before 3');
  yield 3;
  console.log('After 3');
}

const generatorObject = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
/*
Before 1
{ value: 1, done: false }
After 1
Before 2
{ value: 2, done: false }
After 2
Before 3
{ value: 3, done: false }
After 3
{ value: undefined, done: true }
*/
