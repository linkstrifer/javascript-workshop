import Code from './../components/code'

const content = () => (
<div>
  <p>
    The semicolon (;) character is used to separate statements in JavaScript code.
  </p>
  <p>
    Any JavaScript expression is also a statement.
  </p>
  <h2>
    Block statement
  </h2>
  <p>
    The most basic statement is a block statement that is used to group statements. The block is delimited by a pair of curly brackets:
  </p>
  <Code>
    {
`{
  statement_1;
  statement_2;
  .
  .
  .
  statement_n;
}`
  }
  </Code>
  <p>
    Block statements are commonly used with control flow statements (e.g. <code>if</code>, <code>for</code>, <code>while</code>).
  </p>
  <Code>
    {
`while (x < 10) {
  x++;
}`
    }
  </Code>
  <p>
    <strong>Important</strong>: JavaScript prior to ECMAScript2015 does not have block scope. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not define a scope. "Standalone" blocks in JavaScript can produce completely different results from what they would produce in C or Java. For example:
  </p>
  <Code>
    {
`var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2`
    }
  </Code>
  <p>
    This outputs 2 because the <code>var x</code> statement within the block is in the same scope as the <code>var x</code> statement before the block. In C or Java, the equivalent code would have outputted 1.
  </p>
  <h2>
    Conditional statements
  </h2>
  <p>
    A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: <code>if...else and switch</code>.
  </p>
  <h3>
    if...else statement
  </h3>
  <p>
    Use the <code>if</code> statement to execute a statement if a logical condition is true. Use the optional <code>else</code> clause to execute a statement if the condition is false. An if statement looks as follows:
  </p>
  <Code>
    {
`if (condition) {
  statement_1;
} else {
  statement_2;
}`
    }
  </Code>
  <p>
    Here the condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to <code>true</code> and <code>false</code>. If condition evaluates to true, <code>statement_1</code> is executed; otherwise, <code>statement_2</code> is executed. <code>statement_1</code> and <code>statement_2</code> can be any statement, including further nested <code>if</code> statements.
  </p>
  <p>
    You may also compound the statements using <code>else if</code> to have multiple conditions tested in sequence, as follows:
  </p>
  <Code>
    {
`if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}`
    }
  </Code>
  <p>
    In the case of multiple conditions only the first logical condition which evaluates to true will be executed.
  </p>
  <p>
    It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:
  </p>
  <Code>
    {
`if (x = y) {
  /* statements here */
}`
    }
  </Code>
  <p>
    If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:
  </p>
  <Code>
    {
`if ((x = y)) {
  /* statements here */
}`
    }
  </Code>
  <h4>
    Falsy values
  </h4>
  <p>
    The following values evaluate to false (also known as Falsy values):
  </p>
  <ul>
    <li>false</li>
    <li>undefined</li>
    <li>null</li>
    <li>0</li>
    <li>NaN</li>
    <li>the empty string ("")</li>
  </ul>
  <p>
    All other values, including all objects, evaluate to true when passed to a conditional statement.
  </p>
  <p>
    Do not confuse the primitive boolean values <code>true</code> and <code>false</code> with the true and false values of the <code>Boolean object</code>. For example:
  </p>
  <Code>
    {
`var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false`
    }
  </Code>
  <h3>
    switch statement
  </h3>
  <p>
    A <code>switch</code> statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement. A switch statement looks as follows:
  </p>
  <Code>
    {
`switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    ...
  default:
    statements_def
    [break;]
}`
    }
  </Code>
  <h2>
    Exception handling statements
  </h2>
  <p>
    You can <code>throw</code> exceptions using the throw statement and handle them using the try...catch statements.
  </p>
  <h3>
    throw statement
  </h3>
  <p>
    Use the throw statement to throw an exception. When you throw an exception, you specify the expression containing the value to be thrown:
  </p>
  <Code>
    {
`throw expression;`
    }
  </Code>
  <p>
    You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:
  </p>
  <Code>
    {
`throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };`
    }
  </Code>
  <p>
    <strong>Note</strong>: You can specify an object when you throw an exception. You can then reference the object's properties in the catch block. The following example creates an object myUserException of type UserException and uses it in a throw statement.
  </p>
  <Code>
    {
`// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');`
    }
  </Code>
  <h3>
    try...catch statement
  </h3>
  <p>
    The <code>try...catch</code> statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the <code>try...catch</code> statement catches it.
  </p>
  <p>
    The <code>try...catch</code> statement consists of a <code>try</code> block, which contains one or more statements, and a <code>catch</code> block, containing statements that specify what to do if an exception is thrown in the <code>try block</code>. That is, you want the <code>try block</code> to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the <code>try block</code> (or in a function called from within the <code>try block</code>) throws an exception, control immediately shifts to the <code>catch block</code>. If no exception is thrown in the <code>try block</code>, the <code>catch block</code> is skipped. The finally block executes after the <code>try</code> and <code>catch</code> blocks execute but before the statements following the <code>try...catch</code> statement.
  </p>
  <p>
    The following example uses a <code>try...catch</code> statement. The example calls a function that retrieves a month name from an array based on the value passed to the function. If the value does not correspond to a month number (1-12), an exception is thrown with the value <code>"InvalidMonthNo"</code> and the statements in the catch block set the monthName variable to unknown.
  </p>
  <Code>
    {
`function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}`
    }
  </Code>
  <h4>
    The finally block
  </h4>
  <p>
    The <code>finally block</code> contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The <code>finally block</code> executes whether or not an exception is thrown. If an exception is thrown, the statements in the <code>finally block</code> execute even if no catch block handles the exception.
  </p>
  <p>
    You can use the <code>finally block</code> to make your script fail gracefully when an exception occurs; for example, you may need to release a resource that your script has tied up. The following example opens a file and then executes statements that use the file (server-side JavaScript allows you to access files). If an exception is thrown while the file is open, the <code>finally block</code> closes the file before the script fails.
  </p>
  <Code>
    {
`openMyFile();
try {
  writeMyFile(theData); //This may throw a error
} catch(e) {
  handleError(e); // If we got a error we handle it
} finally {
  closeMyFile(); // always close the resource
}`
    }
  </Code>
  <p>
    If the <code>finally block</code> returns a value, this value becomes the return value of the entire try-catch-finally production, regardless of any return statements in the try and catch blocks:
  </p>
  <Code>
    {
`function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false`
    }
  </Code>
  <p>
    Overwriting of return values by the <code>finally block</code> also applies to exceptions thrown or re-thrown inside of the catch block:
  </p>
  <Code>
    {
`function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"`
    }
  </Code>
</div>
)

export default content()
