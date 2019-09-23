# String

## Quotes

```js
const a = 'I am a string';
const a = "I am a string";
const a = `I am a string`;
```

## Concatination

### Plus operator (Old-school)

```js
const a = 'String 1';
const b = 'String 2';
const c = a + ' ' + b; // String 1 String 2
```

### Template literals (ES6)

Учитываются пробелы в коде и переносы строк.
Можно вставлять не только переменные, содержащие числа, но и что угодно.

```js
const a = 'String 1';
const b = 'String 2';
const c = () => '123';

const concat = `${a} ${b} ${c()}`; // "String 1 String 2 123"
```

### Multi-string

```js
let longString1 = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

let longString2 = "This is a very long string which needs \
                  to wrap across multiple lines because \
                  otherwise my code is unreadable.";

let longString3 = `This is a very long string which needs
to wrap across multiple lines because
otherwise my code is unreadable.`;
```

## Convertation Number -> String

```js
const num = 123;

String(num); // "123"

num + ''; // '123'

`${num}`; // '123'

```

## Convertation String -> Number (if string keeps a number)

```js
const a = '1';
const b = '2';
const c = 'String';

+a; // 1
+b; // 2
+c; // NaN
```

## Spec symbols

```js
экранирование кавычек при испоьзовании обычных кавычек
'I\'m the JS!'

\n Перенос строки

\t Табуляция

\uXXXX unicode
```

## String methods

```js
'String'.toLowerCase();            // string

'String'.toUpperCase();            // STRING

'String'.length;                   // 6

'String'[0] || 'String'.charAt(0); // S

'String'.substring(1, 5);          // "trin"

'Ztring'.replace('Z', 'S');        // "String"

'String'.startsWith('St');         // bool

'String'.endsWith('ng');           // bool

'String'.repeat(2);                // "StringString"

'String'.includes('S');            // bool

'String'.split('');                // convert to array ["S", "t", "r", "i", "n", "g"]
```

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.

```js
let str = 'Hi';

str[0] = 'h'; // не изменит переменную
```
