const promise = Promise.resolve().then(() => {
  return promise;
});

promise.catch(console.err);

/*
Result:
TypeError: Chaining cycle detected for promise #<Promise>
*/
