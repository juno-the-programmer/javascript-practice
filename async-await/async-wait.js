/*
ES2017
*/
function request(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

async function fn() {
  const res1 = await request(5);
  const res2 = await request(res1);
  console.log(res2);
}

fn();
/*
Result:
20
*/
