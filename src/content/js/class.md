# Class

Классы в JS = объекты-заготовки, компоненты, которые можно многократно переиспользовать для создания типовых объектов, чтобы постоянно не дубрировать одинаковый код.

Именуются с большой буквы.

## Class creation

```js
class SomeClass {
  constructor() {
    // something
  }
}
```

## Constructor

Одиночный метод класса. Функция, в неё можно записывать любой код, который будет всегда выполняться при использовании экземпляров класса-родителя.

```js
class SomeClass {
  constructor() {
    console.log('Hello, World!');
  }
}

// create examle of class
new SomeClass();
```

```js
class SomeClass {
  constructor() {
    console.log('Hello, World!');
  }
}

// create examle of class
new SomeClass();
```
