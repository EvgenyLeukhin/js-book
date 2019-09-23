# Math operators

Operators with numbers math operations.

Return result of this combine.

```js
1 + 2;      // plus

1 - 2;      // minus

1 / 2;      // division

1 * 2;      // multiplication

2 ** 10;    // exponentiation

15 % 2;     // remainder of the division
```

## Priority

Приоритет у умножения и деления, но его можно поменять, обернув в скобки. Как в математике. For number and boolean types.

```js
1 + 2 * 3;      // 7

(1 + 2) * 3;    // 9
```

## Shortcuts

Операторы вида ++ применяются ТОЛЬКО К ПЕРЕМЕННЫМ, нельзя записывать ++5.

```js
let a = 10;

++a;        // prefix incriment a + 1

--a;        // prefix dicriment a - 1

a++;        // post-prefix incriment a, a + 1 (for cycles)

a--;        // post-prefix dicriment a, a - 1

a += 10;    // a + 10

a -= 10;    // a + 10

a *= 10;    // a * 10

a /= 10;    // a / 10
```

## Math

```js
Math.random();           // return random number from 0 to 1

Math.sqrt(256);          // квадратный корень

Math.min(5, 8, 10, 2));  // 2

Math.max(5, 8, 10, 2));  // 10

Math.floor(123.999));    // 123

Math.ceil(123.111));     // 124

Math.ceil(-123.999));    // -123

Math.round(-123.527));   // -124

Math.abs(-123));         // 123

Math.trunc(-123.132));   // -123

Math.PI;                 // 3.14

Math.E;                  // 2.7

Math.LOG10E;             // 0.434

```
