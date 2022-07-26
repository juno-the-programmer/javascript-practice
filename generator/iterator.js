function* generator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const generatorObject = generator([1, 3, 5]);
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
