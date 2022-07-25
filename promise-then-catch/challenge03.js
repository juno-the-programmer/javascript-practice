Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2; // return new Promise.resolve(2)
  })
  .catch((err) => {
    return 3; // return new Promise.resolve(3)
  })
  .then((res) => {
    console.log(res); // from line 4
  }) // return new Promise.resolve(undefined)
  .then((res) => {
    console.log(res);
  });

/*
Result:
1
2
undefined
*/
