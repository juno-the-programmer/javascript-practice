Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2; // return new Promise.resolve(2)
  })
  .catch((err) => {
    return 3; // return new Promise.reject(3)
  })
  .then((res) => {
    console.log(res); // console.log(3)
  }) // return new Promise.resolve(undefined)
  .then((res) => {
    console.log(res);
  });

/*
Result:
3
undefined
*/
