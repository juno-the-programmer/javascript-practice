let increase = (function () {
  let i = 0; // local scope
  return function () {
    i++;
    console.log(`current counter is ${i}`);
    return i;
  };
})();

increase();
increase();
increase();
