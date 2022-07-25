Promise.resolve()
  .then(() => {
    return new Error('error!!!'); // return new Promise.resolve(new Error('error!!!'))
  })
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((err) => {
    console.log('catch:', err);
  });

/*
Result:
then: Error: error!!!
*/
