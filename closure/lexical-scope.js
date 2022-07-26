/*
lexical scoping(sometimes known as static scoping)

Lexical scope is the ability for a function scope to access variables from the parent scope.
*/
var a = 10; // Global scope

function foo() {
  console.log(a); // Local scope
}

function bar() {
  var a = 20; // Local scope
  foo();
}

bar();

/*
Result:
10
*/
