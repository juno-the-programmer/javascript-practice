(function (a) {
  return (function (b) {
    console.log(a);
  })(1);
})(0);

/*
Translate this code to this:
function foo(a) {
  function bar(b) {
    console.log(a);
  }
  return bar(1);
}
foo(0);

Result:
0
*/
