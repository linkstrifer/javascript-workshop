import Head from './../components/head'
import Wrapper from './../components/wrapper'
import Hero from './../components/hero'
import Content from './../components/content'
import Code from './../components/code'

// ---

import data from './../data/subjects.json'
import assert from './../assert'
import { calcArea, helloWorld, fixItFelixJr, notANumber } from './exercise'

const subject = data.subjects.find((item) => item.id === '01')

function runTest() {
  assert(helloWorld() === 'Hello World', 'Return Hello World')
  assert(calcArea(10, 4) === 40 && calcArea(12, 8) === 96, 'Calculate triangle area')
  assert(fixItFelixJr() === 11, 'Felix Jr fixed')
  assert(isNaN(notANumber() && typeof notANumber() === 'number'), 'is not a number')
}

class Subject extends React.Component {
  componentDidMount() {
    runTest()
  }

  componentDidUpdate() {
    runTest()
  }

  render() {
    return  (
      <Wrapper>
        <Head title={ subject.label }/>
        <Hero title={ subject.label }/>
        <Content>
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
        </Content>
      </Wrapper>
    )
  }
}


export default Subject
