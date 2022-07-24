### Promise

- The JavaScript engine always executes synchronous code first, then asynchronous code.
- Microtasks have a higher priority than macrotasks.
- Microtasks can cut in lines in Event Loop.

| Microtasks                                                               | Macrotasks                   |
| ------------------------------------------------------------------------ | ---------------------------- |
| Promise, ObjectObserver, MutationObserver, process.nextTick, async/await | setTimeout, setInterval, XHR |

- [Challenge 1: Promise Construtor](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge01.js)
- [Challenge 2: .then()](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge02.js)
- [Challenge 3: resolve()](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge03.js)
- [Challenge 4: resolve() isn't called](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge04.js)
- [Challenge 5: The One That's There to Confuse You](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge05.js)
- [Challenge 6: The One With a Fulfilling Promise](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge06.js)
- [Challenge 7: setTimeout vs Promise](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge07.js)
- [Challenge 8: Microtasks mix Macrotasks](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge08.js)
- [Challenge 9: Prioritise Between Microtasks and Macrotasks](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge09.js)
- [Challenge 10: A Typical Interview Question](https://github.com/juno-the-programmer/javascript-practice/blob/main/Promise/challenge10.js)
