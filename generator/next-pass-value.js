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
console.log(generatorObject.next()); // First iteration return nothing because there is no yield to return to
console.log(generatorObject.next(4));
console.log(generatorObject.next());
