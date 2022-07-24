/*
Microtasks mix Macrotasks
*/
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

/*
Result:
1
2
4
timeStart
timeEnd
success
*/
