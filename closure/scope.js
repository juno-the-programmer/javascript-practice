var a = 10; // Glocal scope

function foo() {
  console.log(a); // Local scope
}

foo();

/*
Result:
10
*/
