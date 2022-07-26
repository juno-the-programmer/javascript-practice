for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

/*
Result:
5
5
5
5
5
*/

for (var i = 0; i < 5; ++i) {
  (function (cacheI) {
    setTimeout(function () {
      console.log(cacheI);
    }, 0);
  })(i);
}

/*
Result:
0
1
2
3
4
*/
