const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((res) => {
  console.log('first then: ', res);
  return 2;
});

promise.then((res) => {
  console.log('second then:', res);
  return 3;
});

promise.then((res) => {
  console.log('third then:', res);
});

/*
Result:
first then:1
second then:1
thrid then:1
*/
