# Object

Состоит из пар: имя-значение или ключ-значение.

Объект вызывается с помощью фигурных скобок {...} - поле объекта, в которые вставляются свойства данного объекта. Свойства в объектах перечисляются через "," присваиваются через ":", набодобие как в CSS.

```js
let person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
  man: true
};

// change property
person.age = 34;

// add property
person.country = 'Russia';

// show property
console.log(person.age);

// unknown properrty
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

## Rest, spread operator

Любые манипуляции со свойствами объекта изменяют сам объект. Если мы создали копию объекта через переменную  и поменяли свойства, то это свойства измениться и в первом объекте (свойства объектов находятся в одной ячейке памяти).

Эту проблему можно избежать, если использовать spread оператор.

```js
let newPerson = {
  ...person,
  city: 'Omsk'
};
```
