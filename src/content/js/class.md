# Class

Классы в JS = функции, создающие объекты-заготовки, компоненты, которые можно многократно переиспользовать для создания типовых объектов, чтобы постоянно не дубрировать одинаковый код.

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

Одиночный метод класса. Функция, в неё можно записывать любой код, который будет всегда выполняться при использовании экземпляров класса-родителя. Конструктору можно добавлять аргументы.

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

// create instances of class
new SomeClass();
new SomeClass();
new SomeClass();
```

## Создание экземпляров классе

```js
class Person {
  constructor(firstName, lastName) {
    // шаблонные свойства класса 
    // (будут присваиваться через параметр конструктора)
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // class method
  showFullname() {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

// create instances of class
const person1 = new Person('Jack', 'Sparrow');
person1.showFullname();

const person2 = new Person('John', 'Smith');
person2.showFullname();
```

