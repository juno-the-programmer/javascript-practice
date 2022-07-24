/*
The One With a Fulfilling Promise
*/
console.log('start');

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log('end');

/*
Result:
start
end
1
2
*/
