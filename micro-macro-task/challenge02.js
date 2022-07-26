const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then(() => {
  console.log(3);
});

console.log(4);

/*
Result:
1
4
*/
