function createCounter() {
  let count = 0;
  function increase() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increase, log];
}

const [increase, log] = createCounter();
increase();
increase();
increase();
log();

/*
Result:
Count is 0
*/
