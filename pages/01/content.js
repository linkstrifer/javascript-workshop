import Code from './../components/code'

const content = () => (
<div>
<p>
  JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
</p>

<ul>
  <li>
    Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM).
  </li>
  <li>
    Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server.
  </li>
</ul>

<h2>
  The Basics
</h2>

<p>
  JavaScript borrows most of its syntax from Java, but is also influenced by Awk, Perl and Python.
</p>

<p>
  JavaScript is <strong>case-sensitive</strong> and uses the <strong>Unicode</strong> character set.
</p>

<p>
  In JavaScript, instructions are called statements and are separated by a semicolon (;). Spaces, tabs and newline characters are called whitespace. The source text of JavaScript scripts gets scanned from left to right and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments or whitespace. It is recommended to always add semicolons to end your statements; it will avoid side effects.
</p>

<h3>
  Comments
</h3>

<p>
  The syntax of <strong>comments</strong> is the same as in C++ and in many other languages:
</p>

<Code>
  {
`// a one line comment

/* this is a longer,
multi-line comment
*/

/* You can't, however, /* nest comments */ SyntaxError */`
  }
</Code>

<h3>
  Declarations
</h3>

<p>
  There are three kinds of declarations in JavaScript.
</p>

<dl>
  <dt>
    <code>
      var
    </code>
  </dt>
  <dd>
    <small>
      Declares a variable, optionally initializing it to a value.
    </small>
  </dd>
  <dt>
    <code>
      let
    </code>
  </dt>
  <dd>
    <small>
      Declares a block-scoped, local variable, optionally initializing it to a value.
    </small>
  </dd>
  <dt>
    <code>
      const
    </code>
  </dt>
  <dd>
    <small>
      Declares a block-scoped, read-only named constant.
    </small>
  </dd>
</dl>

<h4>
  Variables
</h4>

<p>
  You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
</p>

<p>
  A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
</p>

<p>
  You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers
</p>

<p>
  Some examples of legal names are <code>Number_hits</code>, <code>temp99</code>, <code>$credit</code>, and <code>_name</code>.
</p>

<h4>
  Declaring variables
</h4>

<p>
  You can declare a variable in three ways:
</p>

<ul>
  <li>
    With the keyword <code>var</code>. For example, <code>var x = 42</code>. This syntax can be used to declare both local and global variables.
  </li>
  <li>
    By simply assigning it a value. For example, <code>x = 42</code>. This always declares a global variable, if it is declared outside of any function. It generates a strict JavaScript warning. You shouldn't use this variant.
  </li>
  <li>
    With the keyword let. For example, <code>let y = 13</code>. This syntax can be used to declare a block-scope local variable.
  </li>
</ul>

<h4>
  Evaluating variables
</h4>

<p>
  A variable declared using the var or let statement with no assigned value specified has the value of undefined.
</p>

<p>
  An attempt to access an undeclared variable will result in a ReferenceError exception being thrown:
</p>

<Code>
  {
`var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;`
  }
</Code>

<p>
  You can use <code>undefined</code> to determine whether a variable has a value. In the following code, the variable input is not assigned a value, and the if statement evaluates to <code>true</code>.
</p>

<Code>
  {
`var input;
if (input === undefined) {
doThis();
} else {
doThat();
}`
  }
</Code>

<p>
  The <code>undefined</code> value converts to <code>NaN</code> when used in numeric context.
</p>

<Code>
  {
`var a;
a + 2;  // Evaluates to NaN`
  }
</Code>

<p>
  When you evaluate a <code>null</code> variable, the null value behaves as 0 in numeric contexts and as <code>false</code> in boolean contexts. For example:
</p>

<Code>
  {
`var n = null;
console.log(n * 32); // Will log 0 to the console`
  }
</Code>

<h4>
  Variable scope
</h4>

<p>
  When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.
</p>

<p>
  JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the <i>function (or global scope)</i> that the block resides within. For example the following code will log 5, because the scope of <code>x</code> is the function (or global context) within which <code>x</code> is declared, not the block, which in this case is an <code>if</code> statement.
</p>

<Code>
  {
`if (true) {
var x = 5;
}
console.log(x);  // x is 5`
  }
</Code>

<p>
  This behavior changes, when using the <code>let</code> declaration introduced in ECMAScript 2015.
</p>

<Code>
  {
`if (true) {
let y = 5;
}
console.log(y);  // ReferenceError: y is not defined`
  }
</Code>

<h4>
  Variable hoisting
</h4>

<p>
  Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as <strong>hoisting</strong>; variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted will return a value of <code>undefined</code>. So even if you declare and initialize after you use or refer to this variable, it will still return <code>undefined</code>.
</p>

<Code>
  {
`/**
* Example 1
*/
console.log(x === undefined); // true
var x = 3;

/**
* Example 2
*/
// will return a value of undefined
var myvar = 'my value';

(function() {
console.log(myvar); // undefined
var myvar = 'local value';
})();`
  }
</Code>

<p>
  The above examples will be interpreted the same as:
</p>

<Code>
  {
`/**
* Example 1
*/
var x;
console.log(x === undefined); // true
x = 3;

/**
* Example 2
*/
var myvar = 'my value';

(function() {
var myvar;
console.log(myvar); // undefined
myvar = 'local value';
})();`
  }
</Code>

<p>
  Because of hoisting, all var statements in a function should be placed as near to the top of the function as possible. This best practice increases the clarity of the code.
</p>

<p>
  In ECMAScript 2015, <code>let</code> (<code>const</code>) <strong>will not hoist</strong> the variable to the top of the block. However, referencing the variable in the block before the variable declaration results in a <code>ReferenceError</code>. The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
</p>

<Code>
  {
`console.log(x); // ReferenceError
let x = 3;`
  }
</Code>

<h4>
  Function hoisting
</h4>

<p>
  For functions, only function declaration gets hoisted to the top and not the function expression.
</p>

<Code>
  {
`/* Function declaration */

foo(); // "bar"

function foo() {
console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
console.log('bar2');
};`
  }
</Code>

<h4>
  Global variables
</h4>

<p>
  Global variables are in fact properties of the <i>global object</i>. In web pages the global object is <code>window</code>, so you can set and access global variables using the <code>window.variable</code> syntax.
</p>

<p>
  Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called <code>phoneNumber</code> is declared in a document, you can refer to this variable from an iframe as <code>parent.phoneNumber</code>.
</p>

<h4>
  Constants
</h4>

<p>
  You can create a read-only, named constant with the <code>const</code> keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign ($) and can contain alphabetic, numeric, or underscore characters.
</p>

<Code>
  {
    `const PI = 3.14;`
  }
</Code>

<p>
  A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.
</p>

<p>
  The scope rules for constants are the same as those for <code>let</code> block-scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.
</p>

<p>
  You cannot declare a constant with the same name as a function or variable in the same scope. For example:
</p>

<Code>
  {
`// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
function f() {
const g = 5;
var g;

//statements
}`
  }
</Code>

<p>
  However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.
</p>

<Code>
  {
`const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';`
  }
</Code>

<h3>
  Data structures and types
</h3>

<h4>
  Data types
</h4>

<p>
  The latest ECMAScript standard defines seven data types:
</p>
<ul>
  <li>Six data types that are primitives:</li>
  <ul>
    <li>
      Boolean. <code>true</code> and <code>false</code>.
    </li>
    <li>
      <code>null</code>. A special keyword denoting a null value. Because JavaScript is case-sensitive, <code>null</code> is not the same as <code>Null</code>, <code>NULL</code>, or any other variant.
    </li>
    <li>
      <code>undefined</code>. A top-level property whose value is undefined.
    </li>
    <li>
      <code>Number</code>. 42 or 3.14159.
    </li>
    <li>
      <code>String</code>. "Howdy"
    </li>
    <li>
      <code>Symbol</code> (new in ECMAScript 2015). A data type whose instances are unique and immutable.
    </li>
  </ul>
  <li>
    and <code>Object</code>
  </li>
</ul>

<p>
  Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. <code>Objects</code> and <code>functions</code> are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.
</p>

<h4>
  Data type conversion
</h4>

<p>
  JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution. So, for example, you could define a variable as follows:
</p>

<Code>
  {
`var answer = 42;`
  }
</Code>

<p>
  And later, you could assign the same variable a string value, for example:
</p>

<Code>
  {
`answer = 'Thanks for all the fish...';`
  }
</Code>

<p>
  Because JavaScript is dynamically typed, this assignment does not cause an error message.
</p>

<p>
  In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:
</p>

<Code>
  {
`x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"`
  }
</Code>

<p>
  In statements involving other operators, JavaScript does not convert numeric values to strings. For example:
</p>

<Code>
  {
`'37' - 7 // 30
'37' + 7 // "377"`
  }
</Code>

<h4>
  Converting strings to numbers
</h4>

<p>
  In the case that a value representing a number is in memory as a string, there are methods for conversion.
</p>

<ul>
  <li><code>parseInt()</code></li>
  <li><code>parseFloat()</code></li>
</ul>

<p>
  <code>parseInt</code> will only return whole numbers, so its use is diminished for decimals. Additionally, a best practice for <code>parseInt</code> is to always include the radix parameter. The radix parameter is used to specify which numerical system is to be used.
</p>

<p>
  An alternative method of retrieving a number from a string is with the + (unary plus) operator:
</p>

<Code>
  {
`'1.1' + '1.1' = '1.11.1'
(+'1.1') + (+'1.1') = 2.2
// Note: the parentheses are added for clarity, not required.`
  }
</Code>

<h3>
  Literals
</h3>

<p>
  You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script. This section describes the following types of literals:
</p>

<ul>
  <li>Array literals</li>
  <li>Boolean literals</li>
  <li>Floating-point literals</li>
  <li>Integers</li>
  <li>Object literals</li>
  <li>RegExp literals</li>
  <li>String literals</li>
</ul>

<h4>
  Array literals
</h4>

<p>
  An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (<code>[]</code>). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.
</p>

<p>
  The following example creates the <code>coffees</code> array with three elements and a length of three:
</p>

<Code>
  {
`var coffees = ['French Roast', 'Colombian', 'Kona'];`
  }
</Code>

<h4>
  Extra commas in array literals
</h4>

<p>
  You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with <code>undefined</code> for the unspecified elements. The following example creates the <code>fish</code> array:
</p>

<Code>
  {
`var fish = ['Lion', , 'Angel'];`
  }
</Code>

<h3>
  Boolean literals
</h3>

<p>
  The Boolean type has two literal values: <code>true</code> and <code>false</code>.
</p>

<p>
  Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">Boolean</a> for more information.
</p>

<h3>
  Integers
</h3>

<p>
  Integers can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).
</p>

<ul>
  <li>Decimal integer literal consists of a sequence of digits without a leading 0 (zero).</li>
  <li>Leading 0 (zero) on an integer literal, or leading 0o (or 0O) indicates it is in octal. Octal integers can include only the digits 0-7.</li>
  <li>Leading 0x (or 0X) indicates hexadecimal. Hexadecimal integers can include digits (0-9) and the letters a-f and A-F.</li>
  <li>Leading 0b (or 0B) indicates binary. Binary integers can include digits only 0 and 1.</li>
</ul>

<p>
  Some examples of integer literals are:
</p>

<Code>
  {
`0, 117 and -345 (decimal, base 10)
015, 0001 and -0o77 (octal, base 8)
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binary, base 2)`
  }
</Code>

<h3>
  Floating-point literals
</h3>

<p>
  A floating-point literal can have the following parts:
</p>

<ul>
  <li>A decimal integer which can be signed (preceded by "+" or "-"),</li>
  <li>A decimal point ("."),</li>
  <li>A fraction (another decimal number),</li>
  <li>An exponent.</li>
</ul>

<p>
  The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit and either a decimal point or "e" (or "E").
</p>

<p>
  For example
</p>

<Code>
  {
`3.1415926
-.123456789
-3.1E+12
.1e-23`
  }
</Code>

<h3>
  Object literals
</h3>

<p>
  An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({"{}"}).
</p>

<p>
  The following is an example of an object literal. The first element of the car object defines a property, <code>myCar</code>, and assigns to it a new string, "Saturn"; the second element, the <code>getCar</code> property, is immediately assigned the result of invoking the function (<code>carTypes("Honda")</code>); the third element, the special property, uses an existing variable (sales).
</p>

<Code>
  {
`var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota`
  }
</Code>

<p>
  Additionally, you can use a numeric or string literal for the name of a property or nest an object inside another. The following example uses these options.
</p>

<Code>
  {
`var car = { manyCars: {a: 'Saab', 'b': 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda`
  }
</Code>

<p>
  Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript identifier or number, it must be enclosed in quotes. Property names that are not valid identifiers also cannot be accessed as a dot (.) property, but can be accessed and set with the array-like notation("[]").
</p>

<Code>
  {
`var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!`
  }
</Code>

<Code>
  {
`var foo = {a: 'alpha', 2: 'two'};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo['a']); // alpha
console.log(foo['2']); // two`
  }
</Code>

<h3>
  RegExp literals
</h3>

<p>
  A regex literal is a pattern enclosed between slashes. The following is an example of an regex literal.
</p>

<Code>
  {
`var re = /ab+c/;`
  }
</Code>

<h3>
  String literals
</h3>

<p>
  A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. The following are examples of string literals:
</p>

<Code>
  {
`'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"`
  }
</Code>

<p>
  You can call any of the methods of the String object on a string literal value—JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object. You can also use the <code>String.length</code> property with a string literal:
</p>

<Code>
  {
`console.log("John's cat".length)
// Will print the number of symbols in the string including whitespace.
// In this case, 10.`
  }
</Code>

<p>
  In ES2015, template literals are also available. Template strings provide syntactic sugar for constructing strings. This is similar to string interpolation features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.
</p>

<Code>
{
"// String interpolation \n" +
"var name = 'Bob', time = 'today'; \n" +
"`Hello ${name}, how are you ${time}?`"
  }
</Code>

<h4>
  Using special characters in strings
</h4>

<p>
  In addition to ordinary characters, you can also include special characters in strings, as shown in the following example.
</p>

<Code>
  {
    "'one line \\n another line'"
  }
</Code>

</div>
)

export default content()
