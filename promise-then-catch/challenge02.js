const promise = new Promise((resolve, reject) => {
  reject('fail');
  resolve('success2');
});

promise
  .then((res) => {
    console.log('then1: ', res);
  })
  .then((res) => {
    console.log('then2: ', res);
  })
  .catch((err) => {
    console.log('catch:', err); // implicit return new Promise.resolve(undefined)
  })
  .then((res) => {
    console.log('then3:', res);
  });

/*
Result:
catch: fail
then3: undefined
*/
