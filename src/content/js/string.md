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

const concat = `${a} ${b} ${c()}`;
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
'String'.toLowerCase();

'String'.toUpperCase();

'String'.length;

'String'[0] || 'String'.charAt(0);

'String'.substring(1, 5);

'Ztring'.replace('Z', 'S');

'String'.startsWith('St');

'String'.endsWith('ng');

'String'.repeat(2);

'String'.includes('S');

'String'.split('');
```

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.

```js
let str = 'Hi';

str[0] = 'h'; // не изменит переменную
```
