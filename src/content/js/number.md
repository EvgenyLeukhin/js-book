# Number

## Exact & fractional

```js
let exact = 12;

let fractional1 = 12.25;

let fractional = 12,25;   // Error

let fractional = .25;     // equal to 0.25

```

Infinity и NaN - это не отдельные типы, а подразновидность number.

## Infinity

```js
123 / 0;
```

## NaN

```js
123 / 'String';

'String' / 2;

// isNaN check (return bool)
isNaN('String' / 2);
```

## Bits

```js
// 16-чная:
0xabc123; // 11256099

// 8-чная:
0123;     // 83

// 2-чная:
0b1001;   // 9
```

## Convertation

```js
Number('123');  // 123

Number('123a'); // NaN

Number(true);   // 1

Number(false);  // 0

Number(null);   // 0

+'123';         // 123

-'123';         // -123

12 * '2';       // 24

12 / '2';       // 6
```

## Methods

```js
parseInt('125.25px');     // 125

parseFloat('125.25px');   // 125.25
```
