import Code from './../components/code'
import Message from './../components/message'

const content = () => (
<div>
  <p>
    <strong>
      Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.
    </strong>
  </p>

  <h2>
    Defining functions
  </h2>

  <h3>
    Function declarations
  </h3>

  <p>
    A <strong>function definition</strong> (also called a <strong>function declaration</strong>, or <strong>function statement</strong>) consists of the <code>function</code> keyword, followed by:
  </p>

  <ul>
    <li>The name of the function.</li>
    <li>A list of parameters to the function, enclosed in parentheses and separated by commas.</li>
    <li>The JavaScript statements that define the function, enclosed in curly brackets, { `{ }` }.</li>
  </ul>

  <p>
    For example, the following code defines a simple function named <code>square</code>:
  </p>

  <Code>
    {
`function square(number) {
  return number * number;
}`
    }
  </Code>

  <p>
    The function <code>square</code> takes one parameter, called <code>number</code>. The function consists of one statement that says to return the parameter of the function (that is, <code>number</code>) multiplied by itself. The <code>return</code> statement specifies the value returned by the function.
  </p>

  <Code>
    {
`return number * number;`
    }
  </Code>

  <p>
    Primitive parameters (such as a number) are passed to functions <code>by value</code>; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.
  </p>

  <p>
    If you pass an object (i.e. a non-primitive value, such as <code>Array</code> or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:
  </p>

  <Code>
    {
`function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)`
    }
  </Code>

  <h3>
    Function expressions
  </h3>

  <p>
    While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be <strong>anonymous</strong>; it does not have to have a name. For example, the function square could have been defined as:
  </p>

  <Code>
    {
`var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16`
    }
  </Code>

  <p>
    However, a name can be provided with a function expression and can be used inside the function to refer to itself, or in a debugger to identify the function in stack traces:
  </p>

  <Code>
    {
`var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));`
    }
  </Code>

  <p>
    Function expressions are convenient when passing a function as an argument to another function. The following example shows a <code>map</code> function being defined and then called with an expression function as its first parameter:
  </p>

  <Code>
    {
`function map(f, a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}`
    }
  </Code>

  <p>
    The following code:
  </p>

  <Code>
    {
`var multiply = function(x) { return x * x * x; }; // Expression function.
map(multiply, [0, 1, 2, 5, 10]);`
    }
  </Code>

  <p>
    returns [0, 1, 8, 125, 1000].
  </p>

  <p>
    In JavaScript, a function can be defined based on a condition. For example, the following function definition defines <code>myFunc</code> only if num equals 0:
  </p>

  <Code>
    {
`var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}`
    }
  </Code>

  <p>
    A method is a function that is a property of an object.
  </p>

  <h2>
    Calling functions
  </h2>

  <p>
    Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called. <strong>Calling</strong> the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows:
  </p>

  <Code>
    {
`square(5);`
    }
  </Code>

  <p>
    The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.
  </p>

  <p>
    Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:
  </p>

  <Code>
    {
`console.log(square(5));
/* ... */
function square(n) { return n * n; }`
    }
  </Code>

  <p>
    The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.
  </p>

  <Message title="Note">
    This works only when defining the function using the above syntax (i.e. function funcName(){}). The code below will not work. That means, function hoisting only works with function declaration and not with function expression.
  </Message>

  <Code>
    {
`console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) {
  return n * n;
}`
    }
  </Code>

  <p>
    The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function.
  </p>

  <p>
    A function can call itself. For example, here is a function that computes factorials recursively:
  </p>

  <Code>
    {
`function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}`
    }
  </Code>

  <p>
    You could then compute the factorials of one through five as follows:
  </p>

  <Code>
    {
`var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120`
    }
  </Code>

  <h2>
    Function scope
  </h2>

  <p>
    Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.
  </p>

  <Code>
    {
`// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"`
    }
  </Code>

  <h2>
    Scope and the function stack
  </h2>

  <h3>
    Recursion
  </h3>

  <p>
    A function can refer to and call itself. There are some ways for a function to refer to itself:
  </p>

  <ul>
    <li>the function's name</li>
    <li>an in-scope variable that refers to the function</li>
  </ul>

  <p>
    For example, consider the following function definition:
  </p>

  <Code>
    {
`var foo = function bar() {
   // statements go here
};`
    }
  </Code>

  <p>
    Within the function body, the following are all equivalent:
  </p>

  <ol>
    <li>bar()</li>
    <li>foo()</li>
  </ol>

  <p>
    A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case). For example, the following loop:
  </p>

  <Code>
    {
`var x = 0;
while (x < 10) { // "x < 10" is the loop condition
   // do stuff
   x++;
}`
    }
  </Code>

  <p>
    can be converted into a recursive function and a call to that function:
  </p>

  <Code>
    {
`function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);`
    }
  </Code>

  <p>
    However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (e.g. the DOM) is more easily done using recursion:
  </p>

  <Code>
    {
`function walkTree(node) {
  if (node == null) //
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}`
    }
  </Code>

  <p>
    Compared to the function <code>loop</code>, each recursive call itself makes many recursive calls here.
  </p>

  <p>
    It is possible to convert any recursive algorithm to a non-recursive one, but often the logic is much more complex and doing so requires the use of a stack. In fact, recursion itself uses a stack: the function stack.
  </p>

  <p>
    The stack-like behavior can be seen in the following example:
  </p>

  <Code>
    {
`function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3`
    }
  </Code>

  <h3>
    Nested functions and closures
  </h3>

  <p>
    You can nest a function within a function. The nested (inner) function is private to its containing (outer) function. It also forms a <i>closure</i>. A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).
  </p>

  <p>
    Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.
  </p>

  <p>
    To summarize:
  </p>

  <ul>
    <li>The inner function can be accessed only from statements in the outer function.</li>
    <li>The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.</li>
  </ul>

  <p>
    The following example shows nested functions:
  </p>

  <Code>
    {
`function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41`
    }
  </Code>

  <p>
    Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
  </p>

  <Code>
    {
`function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8`
    }
  </Code>

  <h3>
    Preservation of variables
  </h3>

  <p>
    Notice how <code>x</code> is preserved when inside is returned. A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned <code>inside</code> is no longer accessible.
  </p>

  <p>
    This is not different from storing references in other objects, but is often less obvious because one does not set the references directly and cannot inspect them.
  </p>

  <h3>
    Multiply-nested functions
  </h3>

  <p>
    Functions can be multiply-nested, i.e. a function (A) containing a function (B) containing a function (C). Both functions B and C form closures here, so B can access A and C can access B. In addition, since C can access B which can access A, C can also access A. Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. (Why it is called "chaining" will be explained later.)
  </p>

  <p>
    Consider the following example:
  </p>

  <Code>
    {
`function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)`
    }
  </Code>

  <p>
    In this example, C accesses B's y and A's x. This can be done because:
  </p>

  <ul>
    <li>B forms a closure including A, i.e. B can access A's arguments and variables.</li>
    <li>C forms a closure including B.</li>
    <li>Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A in that order.</li>
  </ul>

  <p>
    The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.
  </p>

  <h3>
    Name conflicts
  </h3>

  <p>
    When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More inner scopes take precedence, so the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest. This is the scope chain. The first on the chain is the inner-most scope, and the last is the outer-most scope. Consider the following:
  </p>

  <Code>
    {
`function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10`
    }
  </Code>

  <p>
    The name conflict happens at the statement return <code>x</code> and is between <code>inside</code>'s parameter <code>x</code> and <code>outside</code>'s variable <code>x</code>. The scope chain here is (<code>inside</code>, <code>outside</code>, global object). Therefore <code>inside</code>'s <code>x</code> takes precedences over <code>outside</code>'s <code>x</code>, and 20 (<code>inside</code>'s <code>x</code>) is returned instead of 10 (<code>outside</code>'s <code>x</code>).
  </p>

  <h2>
    Closures
  </h2>

  <p>
    Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to). However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of security for the variables of the inner function. Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.
  </p>

  <Code>
    {
`var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');

myPet();                     // Returns "Vivie"`
    }
  </Code>

  <p>
    It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.
  </p>

  <Code>
    {
`var createPet = function(name) {
  var sex;

  return {
    setName: function(newName) {
      name = newName;
    },

    getName: function() {
      return name;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver`
    }
  </Code>

  <p>
    In the code above, the <code>name</code> variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent", yet secure, data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.
  </p>

  <Code>
    {
`var getCode = (function() {
  var secureCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...

  return function() {
    return secureCode;
  };
}());

getCode();    // Returns the secureCode`
    }
  </Code>

  <p>
    There are, however, a number of pitfalls to watch out for when using closures. If an enclosed function defines a variable with the same name as the name of a variable in the outer scope, there is no way to refer to the variable in the outer scope again.
  </p>

  <Code>
    {
`var createPet = function(name) {  // Outer function defines a variable called "name"
  return {
    setName: function(name) {    // Enclosed function also defines a variable called "name"
      name = name;               // ??? How do we access the "name" defined by the outer function ???
    }
  }
}`
    }
  </Code>

  <p>
    The magical <code>this</code> variable is very tricky in closures. They have to be used carefully, as what this refers to depends completely on where the function was called, rather than where it was defined.
  </p>

  <h2>
    Using the arguments object
  </h2>

  <p>
    The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:
  </p>

  <Code>
    {
`arguments[i]`
    }
  </Code>

  <p>
    where <code>i</code> is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be <code>arguments[0]</code>. The total number of arguments is indicated by <code>arguments.length</code>.
  </p>

  <p>
    Using the <code>arguments</code> object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use <code>arguments.length</code> to determine the number of arguments actually passed to the function, and then access each argument using the arguments object.
  </p>

  <p>
    For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:
  </p>

  <Code>
    {
`function myConcat(separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}`
    }
  </Code>

  <p>
    You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
  </p>

  <Code>
    {
`// returns "red, orange, blue, "
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');`
    }
  </Code>

  <Message title="Note">
    The arguments variable is "array-like", but not an array. It is array-like in that is has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.
  </Message>

  <h2>
    Function parameters
  </h2>

  <p>
    Starting with ECMAScript 2015, there are two new kinds of parameters: default parameters and rest parameters.
  </p>

  <h3>
    Default parameters
  </h3>

  <p>
    In JavaScript, parameters of functions default to <code>undefined</code>. However, in some situations it might be useful to set a different default value. This is where default parameters can help.
  </p>

  <p>
    In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are <code>undefined</code>. If in the following example, no value is provided for <code>b</code> in the call, its value would be undefined  when evaluating <code>a*b</code> and the call to multiply would have returned <code>NaN</code>. However, this is caught with the second line in this example:
  </p>

  <Code>
    {
`function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5`
    }
  </Code>

  <p>
    With default parameters, the check in the function body is no longer necessary. Now, you can simply put 1 as the default value for <code>b</code> in the function head:
  </p>

  <Code>
    {
`function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5`
    }
  </Code>

  <h3>
    Rest parameters
  </h3>

  <p>
    The rest parameter syntax allows us to represent an indefinite number of arguments as an array. In the example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one. This example is using an arrow function, which is introduced in the next section.
  </p>

  <Code>
    {
`function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]`
    }
  </Code>

  <h2>
    Arrow functions
  </h2>

  <p>
    An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the <code>this</code> value. Arrow functions are always anonymous.
  </p>

  <p>
    Two factors influenced the introduction of arrow functions: shorter functions and lexical this.
  </p>

  <h3>
    Shorter functions
  </h3>

  <p>
    In some functional patterns, shorter functions are welcome. Compare:
  </p>

  <Code>
    {
`var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]`
    }
  </Code>

  <h3>
    Lexical <code>this</code>
  </h3>

  <p>
    Until arrow functions, every new function defined its own this value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.
  </p>

  <Code>
    {
`function Person() {
  // The Person() constructor defines 'this' as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines 'this'
    // as the global object, which is different from the 'this'
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();`
    }
  </Code>

  <p>
    In ECMAScript 3/5, this issue was fixed by assigning the value in <code>this</code> to a variable that could be closed over.
  </p>

  <Code>
    {
`function Person() {
  var self = this; // Some choose 'that' instead of 'self'.
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the 'self' variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}`
    }
  </Code>

  <p>
    Alternatively, a bound function could be created so that the proper <code>this</code> value would be passed to the <code>growUp()</code> function.
  </p>

  <p>
    Arrow functions capture the <code>this</code> value of the enclosing context, so the following code works as expected.
  </p>

  <Code>
    {
`function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();`
    }
  </Code>
</div>
)

export default content()
