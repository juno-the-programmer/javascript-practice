function request(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

request(1).then((res1) => {
  console.log(res1);

  request(2).then((res2) => {
    console.log(res2);
  });
});

/*
Result:
2
4
*/
