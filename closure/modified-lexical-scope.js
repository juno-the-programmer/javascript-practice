var a = 10; // Global scope

function bar() {
  var a = 20; // Bar scope

  function foo() {
    console.log(a); // Foo scope
  }

  foo();
}

bar();

/*
20
*/
