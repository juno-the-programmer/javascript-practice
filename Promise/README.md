### Promise

- The JavaScript engine always executes synchronous code first, then asynchronous code.
- Microtasks have a higher priority than macrotasks.
- Microtasks can cut in lines in Event Loop.

| Microtasks                                                               | Macrotasks                   |
| ------------------------------------------------------------------------ | ---------------------------- |
| Promise, ObjectObserver, MutationObserver, process.nextTick, async/await | setTimeout, setInterval, XHR |

Challenge 1: Promise Construtor
Challenge 2: .then()
Challenge 3: resolve()
Challenge 4: resolve() isn't called
Challenge 5: The One That's There to Confuse You
Challenge 6: The One With a Fulfilling Promise
Challenge 7: setTimeout vs Promise
Challenge 8: Microtasks mix Macrotasks
Challenge 9: Prioritise Between Microtasks and Macrotasks
Challenge 10: A Typical Interview Question
