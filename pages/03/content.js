import Code from './../components/code'

const content = () => (
<div>
  <p>
    You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction then Y steps in another; for example, the idea "Go five steps to the east" could be expressed this way as a loop:
  </p>

  <Code>
    {
`var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}`
    }
  </Code>

  <p>
    There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (and it's actually possible that number could be zero). The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.
  </p>

  <p>
    The statements for loops provided in JavaScript are:
  </p>

  <ul>
    <li>for statement</li>
    <li>do...while statement</li>
    <li>while statement</li>
    <li>labeled statement</li>
    <li>break statement</li>
    <li>continue statement</li>
    <li>for...in statement</li>
    <li>for...of statement</li>
  </ul>

  <h2>
    for statement
  </h2>

  <p>
    A <code>for</code> loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop. A for statement looks as follows:
  </p>

  <Code>
    {
`for ([initialExpression]; [condition]; [incrementExpression])
  statement`
    }
  </Code>

  <p>
    When a <code>for</code> loop executes, the following occurs:
  </p>

  <ol>
    <li>The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.</li>
    <li>The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.</li>
    <li>The statement executes. To execute multiple statements, use a block statement ({ `{ ... }` }) to group those statements.</li>
    <li>The update expression incrementExpression, if there is one, executes, and control returns to step 2.</li>
  </ol>

  <h3>
    Example
  </h3>

  <p>
    The following function contains a for statement that counts the number of selected options in a scrolling list (a <code>select</code> element that allows multiple selections). The for statement declares the variable i and initializes it to zero. It checks that i is less than the number of options in the <code>select</code> element, performs the succeeding if statement, and increments i by one after each pass through the loop.
  </p>

  <Code language="html">
    {
`<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
</script>`
    }
  </Code>

  <h2>
    do...while statement
  </h2>

  <p>
    The <code>do...while</code> statement repeats until a specified condition evaluates to false. A do...while statement looks as follows:
  </p>

  <Code>
    {
`do
  statement
while (condition);`
    }
  </Code>

  <p>
    statement executes once before the condition is checked. To execute multiple statements, use a block statement ({ `{ ... }` }) to group those statements. If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops and control passes to the statement following do...while.
  </p>

  <h3>
    Example
  </h3>

  <p>
    In the following example, the do loop iterates at least once and reiterates until i is no longer less than 5.
  </p>

  <Code>
    {
`var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);`
    }
  </Code>

  <h2>
    while statement
  </h2>

  <p>
    A <code>while</code> statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:
  </p>

  <Code>
    {
`while (condition)
  statement`
    }
  </Code>

  <p>
    If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
  </p>

  <p>
    The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.
  </p>

  <p>
    To execute multiple statements, use a block statement ({ `{ ... }` }) to group those statements.
  </p>

  <h3>
    Example 1
  </h3>

  <p>
    The following while loop iterates as long as n is less than three:
  </p>

  <Code>
    {
`var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}`
    }
  </Code>

  <p>
    With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:
  </p>

  <ul>
    <li>After the first pass: n = 1 and x = 1</li>
    <li>After the second pass: n = 2 and x = 3</li>
    <li>After the third pass: n = 3 and x = 6</li>
  </ul>

  <p>
    After completing the third pass, the condition n { '<' } 3 is no longer true, so the loop terminates.
  </p>

  <h3>
    Example 2
  </h3>

  <p>
    Avoid infinite loops. Make sure the condition in a loop eventually becomes false; otherwise, the loop will never terminate. The statements in the following while loop execute forever because the condition never becomes false:
  </p>

  <Code>
    {
`while (true) {
  console.log('Hello, world!');
}`
    }
  </Code>

  <h2>
    labeled statement
  </h2>

  <p>
    A <code>label</code> provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.
  </p>

  <p>
    The syntax of the labeled statement looks like the following:
  </p>

  <Code>
    {
`label :
   statement`
    }
  </Code>

  <p>
    The value of <code>label</code> may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.
  </p>

  <h3>
    Example
  </h3>

  <p>
    In this example, the label <code>markLoop</code> identifies a while loop.
  </p>

  <Code>
    {
`markLoop:
while (theMark == true) {
   doSomething();
}`
    }
  </Code>

  <h2>
    break statement
  </h2>

  <p>
    Use the <code>break</code> statement to terminate a loop, <code>switch</code>, or in conjunction with a labeled statement.
  </p>

  <ul>
    <li>When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.</li>
    <li>When you use break with a label, it terminates the specified labeled statement.</li>
  </ul>

  <p>
    The syntax of the break statement looks like this:
  </p>

  <Code>
    {
`break [label];`
    }
  </Code>

  <p>
    The first form of the syntax terminates the innermost enclosing loop or switch; the second form of the syntax terminates the specified enclosing labeled statement.
  </p>

  <h3>
    Example 1
  </h3>

  <p>
    The following example iterates through the elements in an array until it finds the index of an element whose value is <code>theValue</code>:
  </p>

  <Code>
    {
`for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}`
    }
  </Code>

  <h3>
    Example 2: Breaking to a label
  </h3>

  <Code>
    {
`var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}`
    }
  </Code>

  <h2>
    continue statement
  </h2>

  <p>
    The <code>continue</code> statement can be used to restart a <code>while</code>, <code>do-while</code>, <code>for</code>, or <code>label statement</code>.
  </p>

  <ul>
    <li>When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.</li>
    <li>When you use continue with a label, it applies to the looping statement identified with that label.</li>
  </ul>

  <p>
    The syntax of the <code>continue statement</code> looks like the following:
  </p>

  <Code>
    {
`continue [label];`
    }
  </Code>

  <h3>
    Example 1
  </h3>

  <p>
    The following example shows a while loop with a continue statement that executes when the value of i is three. Thus, n takes on the values one, three, seven, and twelve.
  </p>

  <Code>
    {
`var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}`
    }
  </Code>

  <h3>
    Example 2
  </h3>

  <p>
    A statement labeled <code>checkiandj</code> contains a statement labeled <code>checkj</code>. If continue is encountered, the program terminates the current iteration of <code>checkj</code> and begins the next iteration. Each time continue is encountered, <code>checkj</code> reiterates until its condition returns false. When false is returned, the remainder of the <code>checkiandj</code> statement is completed, and <code>checkiandj</code> reiterates until its condition returns false. When false is returned, the program continues at the statement following <code>checkiandj</code>.
  </p>

  <p>
    If continue had a label of <code>checkiandj</code>, the program would continue at the top of the <code>checkiandj</code> statement.
  </p>

  <Code>
    {
`checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
    }`
    }
  </Code>

  <h2>
    for...in statement
  </h2>

  <p>
    The <code>for...in</code> statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A <code>for...in</code> statement looks as follows:
  </p>

  <Code>
    {
`for (variable in object) {
  statements
}`
    }
  </Code>

  <h3>
    Example
  </h3>

  <p>
    The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.
  </p>

  <Code>
    {
`function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}`
    }
  </Code>

  <p>
    For an object <code>car</code> with properties make and model, result would be:
  </p>

  <Code>
    {
`car.make = Ford
car.model = Mustang`
    }
  </Code>

  <h3>
    Arrays
  </h3>

  <p>
    Although it may be tempting to use this as a way to iterate over <code>Array</code> elements, the <code>for...in</code> statement will return the name of your user-defined properties in addition to the numeric indexes. Thus it is better to use a traditional for loop with a numeric index when iterating over arrays, because the <code>for...in</code> statement iterates over user-defined properties in addition to the array elements, if you modify the Array object, such as adding custom properties or methods.
  </p>

  <h2>
    for...of statement
  </h2>

  <p>
    The <code>for...of</code> statement creates a loop Iterating over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.
  </p>

  <Code>
    {
`for (variable of object) {
  statement
}`
    }
  </Code>

  <p>
    The following example shows the difference between a <code>for...of</code> loop and a <code>for...in</code> loop. While for...in iterates over property names, <code>for...of</code> iterates over property values:
  </p>

  <Code>
    {
`let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}`
    }
  </Code>
</div>
)

export default content()
