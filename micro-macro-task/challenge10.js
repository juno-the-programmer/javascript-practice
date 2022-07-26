const promise1 = new Promise((resolve, reject) => {
  const timer1 = setTimeout(() => {
    resolve('success');
  }, 1000);
});

const promise2 = promise1.then(() => {
  throw new Error('error !!!');
});

console.log('promise1', promise1);
console.log('promise2', promise2);

const timer2 = setTimeout(() => {
  console.log('promise1', promise1);
  console.log('promise2', promise2);
}, 2000);

/*
Result:
promise1: Promise<pending>
promise2: Promise<pending>
Error
promise1: Promise<{success}
promise2: Promise<reject Error: error !!!>
*/
