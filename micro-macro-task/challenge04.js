const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then((res) => {
  console.log(res);
});

console.log(2);

/*
Result:
1
2
sucess
*/
