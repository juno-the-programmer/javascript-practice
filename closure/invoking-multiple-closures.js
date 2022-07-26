function createCounter() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}

let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1());
console.log(increase1());

console.log(increase2());
console.log(increase2());

/*
Result:
1
2
1
2
*/
