const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
});

promise1.then((res) => {
  console.log(3);
});

console.log(4);

/*
Result:
1
4
3
*/
