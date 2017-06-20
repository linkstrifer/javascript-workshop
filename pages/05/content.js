import Code from './../components/code'
import Message from './../components/message'

const content = () => (
<div>
  <h2>
    Operators
  </h2>

  <p>
    JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.
  </p>

  <ul>
    <li>Assignment operators</li>
    <li>Comparison operators</li>
    <li>Arithmetic operators</li>
    <li>Bitwise operators</li>
    <li>Logical operators</li>
    <li>String operators</li>
    <li>Conditional (ternary) operator</li>
    <li>Comma operator</li>
    <li>Unary operators</li>
    <li>Relational operator</li>
  </ul>

  <p>
    JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator:
  </p>

  <Code>
    {
`operand1 operator operand2`
    }
  </Code>

  <p>
    For example, <code>3+4</code> or <code>x*y</code>.
  </p>

  <p>
    A unary operator requires a single operand, either before or after the operator:
  </p>

  <Code>
    {
`operator operand`
    }
  </Code>

  <p>
    or
  </p>

  <Code>
    {
`operand operator`
    }
  </Code>

  <p>
    For example, <code>x++</code> or <code>++x</code>.
  </p>

  <h3>
    Assignment operators
  </h3>

  <p>
    An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, <code>x = y</code> assigns the value of <code>y</code> to <code>x</code>.
  </p>

  <p>
    There are also compound assignment operators that are shorthand for the operations listed in the following table:
  </p>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Shorthand operator</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Assignment</td>
        <td>x = y</td>
        <td>x = y</td>
      </tr>
      <tr>
        <td>Addition assignment</td>
        <td>x += y</td>
        <td>x = x + y</td>
      </tr>
      <tr>
        <td>Subtraction assignment</td>
        <td>x -= y</td>
        <td>x = x - y</td>
      </tr>
      <tr>
        <td>Multiplication assignment</td>
        <td>x *= y</td>
        <td>x = x * y</td>
      </tr>
      <tr>
        <td>Division assignment</td>
        <td>x /= y</td>
        <td>x = x / y</td>
      </tr>
      <tr>
        <td>Remainder assignment</td>
        <td>x %= y</td>
        <td>x = x % y</td>
      </tr>
      <tr>
        <td>Exponentiation assignment</td>
        <td>x **= y</td>
        <td>x = x ** y</td>
      </tr>
      <tr>
        <td>Left shift assignment</td>
        <td>x { `<<=` } y</td>
        <td>x = x { `<<` } y</td>
      </tr>
      <tr>
        <td>Right shift assignment</td>
        <td>x >>= y</td>
        <td>x = x >> y</td>
      </tr>
      <tr>
        <td>Unsigned right shift assignment</td>
        <td>x >>>= y</td>
        <td>x = x >>> y</td>
      </tr>
      <tr>
        <td>Bitwise AND assignment</td>
        <td>x &= y</td>
        <td>x = x & y</td>
      </tr>
      <tr>
        <td>Bitwise XOR assignment</td>
        <td>x ^= y</td>
        <td>x = x ^ y</td>
      </tr>
      <tr>
        <td>Bitwise OR assignment</td>
        <td>x |= y</td>
        <td>x = x | y</td>
      </tr>
    </tbody>
  </table>

  <h4>
    Destructuring
  </h4>

  <p>
    For more complex assignments, the destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.
  </p>

  <Code>
    {
`var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;`
    }
  </Code>

  <h3>
    Comparison operators
  </h3>

  <p>
    A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality. The following table describes the comparison operators in terms of this sample code:
  </p>

  <Code>
    {
`var var1 = 3;
var var2 = 4;`
    }
  </Code>

  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Description</th>
        <th>Examples returning true</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Equal (==)</td>
        <td>Returns true if the operands are equal.</td>
        <td>3 == var1</td>
      </tr>
      <tr>
        <td>Not equal (!=)</td>
        <td>Returns true if the operands are not equal.</td>
        <td>var1 != 4</td>
      </tr>
      <tr>
        <td>Strict equal (===)</td>
        <td>Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.</td>
        <td>3 === var1</td>
      </tr>
      <tr>
        <td>Strict not equal (!==)</td>
        <td>Returns true if the operands are of the same type but not equal, or are of different type.</td>
        <td>var1 !== "3"</td>
      </tr>
      <tr>
        <td>Greater than (>)</td>
        <td>Returns true if the left operand is greater than the right operand.</td>
        <td>var2 > var1</td>
      </tr>
      <tr>
        <td>Greater than or equal (>=)</td>
        <td>Returns true if the left operand is greater than or equal to the right operand.</td>
        <td>var2 >= var1</td>
      </tr>
      <tr>
        <td>Less than ({ `<` })</td>
        <td>Returns true if the left operand is less than the right operand.</td>
        <td>var1 { `<` } var2</td>
      </tr>
      <tr>
        <td>Less than or equal ({ `<=` })</td>
        <td>Returns true if the left operand is less than or equal to the right operand.</td>
        <td>var1 { `<=` } var2</td>
      </tr>
    </tbody>
  </table>

  <Message title="Note">
    (=>) is not an operator, but the notation for Arrow functions.
  </Message>

  <h3>
    Arithmetic operators
  </h3>

  <p>
    An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity). For example:
  </p>

  <Code>
    {
`1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // this is true`
    }
  </Code>

  <p>
    In addition to the standard arithmetic operations (+, -, * /), JavaScript provides the arithmetic operators listed in the following table:
  </p>

  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Remainder (%)</td>
        <td>Binary operator. Returns the integer remainder of dividing the two operands.</td>
        <td>12 % 5 returns 2.</td>
      </tr>
      <tr>
        <td>Increment (++)</td>
        <td>Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.</td>
        <td>If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.</td>
      </tr>
      <tr>
        <td>Decrement (--)</td>
        <td>Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.</td>
        <td>If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.</td>
      </tr>
      <tr>
        <td>Unary negation (-)</td>
        <td>Unary operator. Returns the negation of its operand.</td>
        <td>If x is 3, then -x returns -3.</td>
      </tr>
      <tr>
        <td>Unary plus (+)</td>
        <td>Unary operator. Attempts to convert the operand to a number, if it is not already.</td>
        <td>+"3" returns 3.</td>
      </tr>
    </tbody>
  </table>

  <h3>
    Bitwise operators
  </h3>

  <p>
    A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.
  </p>

  <p>
    The following table summarizes JavaScript's bitwise operators.
  </p>

  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Usage</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bitwise AND</td>
        <td>a & b</td>
        <td>Returns a one in each bit position for which the corresponding bits of both operands are ones.</td>
      </tr>
      <tr>
        <td>Bitwise OR</td>
        <td>a | b</td>
        <td>Returns a zero in each bit position for which the corresponding bits of both operands are zeros.</td>
      </tr>
      <tr>
        <td>Bitwise XOR</td>
        <td>a ^ b</td>
        <td>Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]</td>
      </tr>
      <tr>
        <td>Bitwise NOT</td>
        <td>~ a</td>
        <td>Inverts the bits of its operand.</td>
      </tr>
      <tr>
        <td>Left shift</td>
        <td>a { `<<` } b</td>
        <td>Shifts a in binary representation b bits to the left, shifting in zeros from the right.</td>
      </tr>
      <tr>
        <td>Sign-propagating right shift</td>
        <td>a >> b</td>
        <td>Shifts a in binary representation b bits to the right, discarding bits shifted off.</td>
      </tr>
      <tr>
        <td>Zero-fill right shift</td>
        <td>a >>> b</td>
        <td>Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.</td>
      </tr>
    </tbody>
  </table>

  <h4>
    Bitwise logical operators
  </h4>

  <p>
    Conceptually, the bitwise logical operators work as follows:
  </p>

  <ul>
    <li>
      The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer:

      <Code>
        {
`Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001`
        }
      </Code>
    </li>
    <li>Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.</li>
    <li>The operator is applied to each pair of bits, and the result is constructed bitwise.</li>
  </ul>

  <p>
    For example, the binary representation of nine is 1001, and the binary representation of fifteen is 1111. So, when the bitwise operators are applied to these values, the results are as follows:
  </p>

  <table>
    <thead>
      <tr>
        <th>Expression</th>
        <th>Result</th>
        <th>Binary Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>15 & 9</td>
        <td>9</td>
        <td>1111 & 1001 = 1001</td>
      </tr>
      <tr>
        <td>15 | 9</td>
        <td>15</td>
        <td>1111 | 1001 = 1111</td>
      </tr>
      <tr>
        <td>15 ^ 9</td>
        <td>6</td>
        <td>1111 ^ 1001 = 0110</td>
      </tr>
      <tr>
        <td>~15</td>
        <td>-16</td>
        <td>~00000000...00001111 = 11111111...11110000</td>
      </tr>
      <tr>
        <td>~9</td>
        <td>-10</td>
        <td>~00000000...00001001 = 11111111...11110110</td>
      </tr>
    </tbody>
  </table>

  <p>
    Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with the most significant (left-most) bit set to 1 represent negative numbers (two's-complement representation).
  </p>

  <h4>
    Bitwise shift operators
  </h4>

  <p>
    The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be shifted. The direction of the shift operation is controlled by the operator used.
  </p>

  <p>
    Shift operators convert their operands to thirty-two-bit integers and return a result of the same type as the left operand.
  </p>

  <p>
    The shift operators are listed in the following table.
  </p>
  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Left shift ({ `<<` })</td>
        <td>This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.</td>
        <td>9{ `<<` }2 yields 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.</td>
      </tr>
      <tr>
        <td>Sign-propagating right shift (>>)</td>
        <td>This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left.</td>
        <td>9>>2 yields 2, because 1001 shifted 2 bits to the right becomes 10, which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.</td>
      </tr>
      <tr>
        <td>Zero-fill right shift (>>>)</td>
        <td>This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.</td>
        <td>19>>>2 yields 4, because 10011 shifted 2 bits to the right becomes 100, which is 4. For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.</td>
      </tr>
    </tbody>
  </table>

  <h3>
    Logical operators
  </h3>

  <p>
    Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the following table.
  </p>

  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Usage</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Logical AND (&&)</td>
        <td>expr1 && expr2</td>
        <td>Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.</td>
      </tr>
      <tr>
        <td>Logical OR (||)</td>
        <td>expr1 || expr2</td>
        <td>Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.</td>
      </tr>
      <tr>
        <td>Logical NOT (!)</td>
        <td>!expr</td>
        <td>Returns false if its single operand can be converted to true; otherwise, returns true.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Examples of expressions that can be converted to false are those that evaluate to null, 0, NaN, the empty string (""), or undefined.
  </p>

  <p>
    The following code shows examples of the && (logical AND) operator.
  </p>

  <Code>
    {
`var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false`
    }
  </Code>

  <p>
    The following code shows examples of the || (logical OR) operator.
  </p>

  <Code>
    {
`var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat`
    }
  </Code>

  <p>
    The following code shows examples of the ! (logical NOT) operator.
  </p>

  <Code>
    {
`var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false`
    }
  </Code>

  <h4>
    Short-circuit evaluation
  </h4>

  <p>
    As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:
  </p>

  <ul>
    <li>false && anything is short-circuit evaluated to false.</li>
    <li>true || anything is short-circuit evaluated to true.</li>
  </ul>

  <p>
    The rules of logic guarantee that these evaluations are always correct. Note that the anything part of the above expressions is not evaluated, so any side effects of doing so do not take effect.
  </p>

  <h3>
    String operators
  </h3>

  <p>
    In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.
  </p>

  <p>
    For example,
  </p>

  <Code>
    {
`console.log('my ' + 'string'); // console logs the string "my string".`
    }
  </Code>

  <p>
    The shorthand assignment operator += can also be used to concatenate strings.
  </p>

  <p>
    For example,
  </p>

  <Code>
    {
`var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.`
    }
  </Code>

  <h3>
    Conditional (ternary) operator
  </h3>

  <p>
    The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:
  </p>

  <Code>
    {
`condition ? val1 : val2`
    }
  </Code>

  <p>
    If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.
  </p>

  <p>
    For example,
  </p>

  <Code>
    {
`var status = (age >= 18) ? 'adult' : 'minor';`
    }
  </Code>

  <p>
    This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, it assigns the value "minor" to status.
  </p>

  <h3>
    Comma operator
  </h3>

  <p>
    The comma operator (,) simply evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop.
  </p>

  <p>
    For example, if a is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:
  </p>

  <Code>
    {
`for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);`
    }
  </Code>

  <h3>
    Unary operators
  </h3>

  <p>
    A unary operation is an operation with only one operand.
  </p>

  <h4>
    delete
  </h4>

  <p>
    The delete operator deletes an object, an object's property, or an element at a specified index in an array. The syntax is:
  </p>

  <Code>
    {
`delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement`
    }
  </Code>

  <p>
    where objectName is the name of an object, property is an existing property, and index is an integer representing the location of an element in an array.
  </p>

  <p>
    The fourth form is legal only within a with statement, to delete a property from an object.
  </p>

  <p>
    You can use the delete operator to delete variables declared implicitly but not those declared with the var statement.
  </p>

  <p>
    If the delete operator succeeds, it sets the property or element to undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.
  </p>

  <Code>
    {
`x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)`
    }
  </Code>

  <h4>
    Deleting array elements
  </h4>

  <p>
    When you delete an array element, the array length is not affected. For example, if you delete a[3], a[4] is still a[4] and a[3] is undefined.
  </p>

  <p>
    When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete. However, trees[3] is still addressable and returns undefined.
  </p>

  <Code>
    {
`var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}`
    }
  </Code>

  <p>
    If you want an array element to exist but have an undefined value, use the undefined keyword instead of the delete operator. In the following example, trees[3] is assigned the value undefined, but the array element still exists:
  </p>

  <Code>
    {
`var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}`
    }
  </Code>

  <h4>
    typeof
  </h4>

  <p>
    The typeof operator is used in either of the following ways:
  </p>

  <Code>
    {
`typeof operand
typeof (operand)`
    }
  </Code>

  <p>
    The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.
  </p>

  <p>
    Suppose you define the following variables:
  </p>

  <Code>
    {
`var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();`
    }
  </Code>

  <p>
    The typeof operator returns the following results for these variables:
  </p>

  <Code>
    {
`typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"`
    }
  </Code>

  <p>
    For the keywords true and null, the typeof operator returns the following results:
  </p>

  <Code>
    {
`typeof true; // returns "boolean"
typeof null; // returns "object"`
    }
  </Code>

  <p>
    For a number or string, the typeof operator returns the following results:
  </p>

  <Code>
    {
`typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"`
    }
  </Code>

  <p>
    For property values, the typeof operator returns the type of value the property contains:
  </p>

  <Code>
    {
`typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"`
    }
  </Code>

  <p>
    For methods and functions, the typeof operator returns results as follows:
  </p>

  <Code>
    {
`typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"`
    }
  </Code>

  <p>
    For predefined objects, the typeof operator returns results as follows:
  </p>

  <Code>
    {
`typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"`
    }
  </Code>

  <h4>
    void
  </h4>

  <p>
    The void operator is used in either of the following ways:
  </p>

  <Code>
    {
`void (expression)
void expression`
    }
  </Code>

  <p>
    The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. The parentheses surrounding the expression are optional, but it is good style to use them.
  </p>

  <p>
    You can use the void operator to specify an expression as a hypertext link. The expression is evaluated but is not loaded in place of the current document.
  </p>

  <p>
    The following code creates a hypertext link that does nothing when the user clicks it. When the user clicks the link, void(0) evaluates to undefined, which has no effect in JavaScript.
  </p>

  <Code>
    {
`<a href="javascript:void(0)">Click here to do nothing</a>`
    }
  </Code>

  <p>
    The following code creates a hypertext link that submits a form when the user clicks it.
  </p>

  <Code>
    {
`<a href="javascript:void(document.form.submit())">
Click here to submit</a>`
    }
  </Code>

  <h3>
    Relational operators
  </h3>

  <p>
    A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.
  </p>

  <h4>
    in
  </h4>

  <p>
    The in operator returns true if the specified property is in the specified object. The syntax is:
  </p>

  <p>
    where propNameOrNumber is a string or numeric expression representing a property name or array index, and objectName is the name of an object.
  </p>

  <p>
    The following examples show some uses of the in operator.
  </p>

  <Code>
    {
`// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true`
    }
  </Code>

  <h4>
    instanceof
  </h4>

  <p>
    The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
  </p>

  <Code>
    {
`objectName instanceof objectType`
    }
  </Code>

  <p>
    where objectName is the name of the object to compare to objectType, and objectType is an object type, such as Date or Array.
  </p>

  <p>
    Use instanceof when you need to confirm the type of an object at runtime. For example, when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.
  </p>

  <p>
    For example, the following code uses instanceof to determine whether theDay is a Date object. Because theDay is a Date object, the statements in the if statement execute.
  </p>

  <Code>
    {
`var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}`
    }
  </Code>

  <h2>
    Operator precedence
  </h2>

  <p>
    The precedence of operators determines the order they are applied when evaluating an expression. You can override operator precedence by using parentheses.
  </p>

  <p>
    The following table describes the precedence of operators, from highest to lowest.
  </p>

  <table>
    <thead>
      <tr>
        <th>Operator type</th>
        <th>Individual operators</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>member</td>
        <td>. []</td>
      </tr>
      <tr>
        <td>call / create instance</td>
        <td>() new</td>
      </tr>
      <tr>
        <td>negation/increment</td>
        <td>! ~ - + ++ -- typeof void delete</td>
      </tr>
      <tr>
        <td>multiply/divide</td>
        <td>* / %</td>
      </tr>
      <tr>
        <td>addition/subtraction</td>
        <td>+ -</td>
      </tr>
      <tr>
        <td>bitwise shift</td>
        <td>{ `<<` } >> >>></td>
      </tr>
      <tr>
        <td>relational</td>
        <td>{ `< <= > >=` }  in instanceof</td>
      </tr>
      <tr>
        <td>equality</td>
        <td>== != === !==</td>
      </tr>
      <tr>
        <td>bitwise-and</td>
        <td>&</td>
      </tr>
      <tr>
        <td>bitwise-xor</td>
        <td>^</td>
      </tr>
      <tr>
        <td>bitwise-or</td>
        <td>|</td>
      </tr>
      <tr>
        <td>logical-and</td>
        <td>&&</td>
      </tr>
      <tr>
        <td>logical-or</td>
        <td>||</td>
      </tr>
      <tr>
        <td>conditional</td>
        <td>?:</td>
      </tr>
      <tr>
        <td>assignment</td>
        <td>{ `= += -= *= /= %= <<= >>= >>>= &= ^= |=` }</td>
      </tr>
      <tr>
        <td>comma</td>
        <td>,</td>
      </tr>
    </tbody>
  </table>

  <h2>
    Expressions
  </h2>

  <p>
    An expression is any valid unit of code that resolves to a value.
  </p>

  <p>
    Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluates and therefore resolves to value.
  </p>

  <p>
    The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.
  </p>

  <p>
    The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.
  </p>

  <p>
    JavaScript has the following expression categories:
  </p>

  <ul>
    <li>Arithmetic: evaluates to a number, for example 3.14159. (Generally uses arithmetic operators.)</li>
    <li>String: evaluates to a character string, for example, "Fred" or "234". (Generally uses string operators.)</li>
    <li>Logical: evaluates to true or false. (Often involves logical operators.)</li>
    <li>Primary expressions: Basic keywords and general expressions in JavaScript.</li>
    <li>Left-hand-side expressions: Left values are the destination of an assignment.</li>
  </ul>

  <h3>
    Primary expressions
  </h3>

  <p>
    Basic keywords and general expressions in JavaScript.
  </p>

  <h4>
    this
  </h4>

  <p>
    Use the this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation:
  </p>

  <Code>
    {
`this['propertyName']
this.propertyName`
    }
  </Code>

  <p>
    Suppose a function called validate validates an object's value property, given the object and the high and low values:
  </p>

  <Code>
    {
`function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}`
    }
  </Code>

  <p>
    You could call validate in each form element's onChange event handler, using this to pass it the form element, as in the following example:
  </p>

  <Code>
    {
`<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">`
    }
  </Code>

  <h4>
    Grouping operator
  </h4>

  <p>
    The grouping operator ( ) controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.
  </p>

  <Code>
    {
`var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9`
    }
  </Code>

  <h3>
    Left-hand-side expressions
  </h3>

  <p>
    Left values are the destination of an assignment.
  </p>

  <h4>
    new
  </h4>

  <p>
    You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows:
  </p>

  <Code>
    {
`var objectName = new objectType([param1, param2, ..., paramN]);`
    }
  </Code>

  <h4>
    super
  </h4>

  <p>
    The super keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor, for example.
  </p>

  <Code>
    {
`super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);`
    }
  </Code>

  <h4>
    Spread operator
  </h4>

  <p>
    The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
  </p>

  <p>
    <strong>Example:</strong> Today if you have an array and want to create a new array with the existing one being part of it, the array literal syntax is no longer sufficient and you have to fall back to imperative code, using a combination of push, splice, concat, etc. With spread syntax this becomes much more succinct:
  </p>

  <Code>
    {
`var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];`
    }
  </Code>

  <p>
    Similarly, the spread operator works with function calls:
  </p>

  <Code>
    {
`function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);`
    }
  </Code>
</div>
)

export default content()
