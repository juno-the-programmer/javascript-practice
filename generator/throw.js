function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generatorObject = generateId();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.throw(new Error('error....')));
console.log(generatorObject.next());
console.log(generatorObject.next());

/*
{ value: 1, done: false }
{ value: 2, done: false }
Error: error....
*/
