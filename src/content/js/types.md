# Types

JavaScript has 6 types of data.
1-5 - Primitive types and 6 is object.

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Object
---
7. Symbol (ES6)
8. BigInt (ES9)

## typeof

To check variable type, you should use typeof operator.

```js
typeof 123 || typeof(123); // number

typeof '123';              // string

typeof true;               // boolean

typeof null;               // object. This is error is JS.

typeof undefined;          // undefined

typeof [];                 // object

typeof {};                 // object

typeof {};                 // object

// This type is doesn't exist. But it's very helpful;
typeof (() => alert(123)); // function
```
