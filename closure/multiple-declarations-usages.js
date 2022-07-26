let count = 0; // Global Scope

(function () {
  if (count === 0) {
    // Function Scope
    let count = 1; // If Scope
    console.log(count);
  }
  console.log(count);
})();

/*
The Function Scope didn’t declare its own count, so the count we use in this scope is the count of the global scope.
The If Scope declared its own count, so the count we use in this scope is the count of the current scope.
Result:
1
0
*/
