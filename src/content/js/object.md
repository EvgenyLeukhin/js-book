# Object

Самый основной тип данных в JS. Состоит из пар: имя-значение или ключ-значение.

Объект вызывается с помощью фигурных скобок {...} - поле объекта, в которые вставляются свойства данного объекта. Свойства в объектах перечисляются через "," присваиваются через ":", набодобие как в CSS.

Объект -> Свойство объекта -> Значение свойства (key: value,). Если в свойстве обекта лежит функция, то она называется методом объекта.

```js
let person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
  man: true,
  "likes birds": true,        // 2 words with ""
  showName() {                // some object method
    return `${this.name}`;
  }
};

// change property
person.age = 34;

// add property
person.country = 'Russia';

// show property
console.log(person.age);
console.log(person["likes birds"]);

// unknown property
console.log(person.height); // return undefined

// or
console.log(person['age']);

// delete property
delete person.age;
```

## Nesting objects

```js
let person = {
  wife: {
    name: 'Inna',
    sername: 'Begunova',
    age: 33,
  }
};

console.log(person.wife.name);
```

## Spread operator

Одним из фундаментальных отличий объектов от примитивных типов данных является то, что они хранятся и копируются «по ссылке». Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него. Сам объект хранится где-то в памяти. А в переменной user лежит «ссылка» на эту область памяти. Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.

Примитивные типы: строки, числа, логические значения – присваиваются и копируются «по значению».

Любые манипуляции со свойствами объекта по ссылке изменяют сам объект. Если мы создали копию объекта через переменную  и поменяли свойства, то это свойства измениться и в первом объекте (свойства объектов находятся в одной ячейке памяти). 

Чтобы этого избежать нужно использовать spread operator.

```js
const person = {
  name: 'John',
  city: 'Omdk'
};

const newPerson = {
  ...person
};

newPerson.name = 'Jack';
person.name; // 'John' значение не поменяется


```

## Cвойства

Если мы будем обращаться к несуществующему свойству объекта, то ошибки не будет, а просто вернется undefined.

### Вычисляемые свойства

```js
let fruit = prompt("Какой фрукт купить?", "apple"); // apple будет стоять по ум*

let bag = {
  [fruit]: 5 // имя свойства будет взято из переменной fruit 
};
```

Также в именовании свойств объекта РАЗРЕШЕНО использовать ключевые слова, запрещение распространяется только в именовании переменных.

### \__proto\__

\__proto\__ - особое свойство всех объектов, в котором нельзя что-либо изменять. Содержит много встроенных свойст.

### Фунцкия, создающая объект

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

```js
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}
```

```js
const makeUser = (name, age) => {
  return { name, age }
};

makeUser('John', 33);
```

### In, For/In

Проверка наличия свойства в объекте


```js
let user = {};

// true означает "свойства нет"
alert(user.noSuchProperty === undefined); // true

// или через оператор in
alert('noSuchProperty' in user); // false
```

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  console.log(key);  // name, age, isAdmin
  // значения ключей
  console.log(user[key]); // John, 30, true
}
```

## this

Обращение к ТЕКУЩЕМУ объекту. this указывает на принадлежность к текущему объекту, как бы глубоко не находились его свойства.

```js
var table = {
  height: 100,
  legsCount: 4,
  myFunc: function() {
    this.height = 300;   }
};
```

## Destructuring

```js
const { title, width } = options;

// with change value
const { title: 'anoter value', width } = options;

// nesting
const { title, width: { fullWidth } } = options;
```

## JSON

React apps works with JSON API.
