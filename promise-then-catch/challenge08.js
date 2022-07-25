Promise.resolve(1)
  .then(2) // ignore
  .then(Promise.resolve(3)) // ignored
  .then(console.log);

/*
The argument to .then or .catch should be a function
Result:
1
*/
