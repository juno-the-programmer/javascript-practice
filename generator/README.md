# Generator
```sh
function* simpleGenerator () {
    yield 1
    yield 2
    yield 2
}

const generatorObject = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

/*
Output:
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
```
- an asterisk after function keyword 
- yield is a special type of return keyword only useful in generator
    - next - allows use to execute the code inside generator
    - return - exit out of generator prematurely
    - throw - to throw an error

What are the use cases:
- infinite loop - actually doesn't stop/freeze your program, because it's only execute one step at a time.
- iterator
