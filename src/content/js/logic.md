# Logic operators

Has a strong connect with boolean data type. Бинарный оператор.

## (>, >=, <, <=, ==, ===, !, !=, !==) operators

```js
1 > 0; // true

1 < 0; // false

1 == '1'; // true

1 === '1'; // false

!true; // false (NOT operator)
```

## (&& и ||) operators

Логический оператор || проверяет на истинность левый операнд, если он true, то остальные не проверяет, а сразу возвращает значение этого правдивого операнда, если левый ложь, тогда проверяет следущий (который правее).

Логический оператор && также начинает проверять левый операнд, если он ложный, то другое не проверяется, а сразу возвращает ложь первого.

ИЛИ "вспотыкается" на правде, И - на лжи.

|| Если какой-нибудь true - то возвращает true.

&& Если какой-нибудь false - то возвращает false.

```js
0 || false; // false

0 || 1; // 1

true || false; // true

true && false; // false

'1' || '2' || '3'; // 1

'1' && '2' && '3' // 3
```

## if-else operator

() after if always return boolean expression. Унарный оператор.

```js
let a = true;

if (a) {
  // something 1
} else {
  // something 2
}
```

if-else chain. Multi level of if-else operators is a bad practice. May has bad readable.

```js
let a = true;
let b = false;

if (a) {
  if (b > a) {
    // something 0
  }
  // something 1
} else if (a > b) {
  // something 2
} else {
  // something 3
}
```

## ? : operator

Тернарный оператор.

```js
let a = true;

a ? alert(true) : alert(false);
```

## switch-case operator

При проверке переменной на какие-либо варианты значений, удобно пользоваться командой switch-case. Использует === case - проверка на случай, их может быть сколь угодно. 

break - прерывание инструкции, если какой-либо case будет true, то проверка прервётся и другие случаи не будут проверяться.

default - аналог else, если не выбирется ни один case, то сработает default.

Если бы не стоял break, то инструкции для a = 6, a = 7, default также бы сработали

```js
let a = 5;

// check a
switch(a) { 
  case 0: console.log('a = 0'); break;
  case 1: console.log('a = 1'); break;
  case 2: console.log('a = 2'); break;
  case 3: console.log('a = 3'); break;
  case 4: console.log('a = 4'); break;
  case 5: console.log('a = 5'); break;
  case 6: console.log('a = 6'); break;
  case 7: console.log('a = 7'); break;
  default: console.log('a > 7 или a < 0');
};

```
