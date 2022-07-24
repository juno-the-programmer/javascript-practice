/*
setTimeout vs Promise
*/
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');

/*
Tasks with higher priority are called microtasks: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await
Tasks with lower priority are called macrotasks: setTimeout, setInterval, XHR
Result:
start
end
resolve
setTimeout
*/
