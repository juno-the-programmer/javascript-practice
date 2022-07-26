var a = 10; // Global scope

function foo() {
  var a = 20; // Local Scope
  console.log(a);
}

a = 30;

foo();

/*
Result:
20
*/
