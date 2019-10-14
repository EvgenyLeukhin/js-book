# Class

Классы в JS = функции, создающие объекты-заготовки, компоненты, которые можно многократно переиспользовать (экпортировать/импортировать, а также РАСШИРЯТЬ свойства) для создания типовых объектов, чтобы постоянно не дубрировать одинаковый код. Именуются с большой буквы.

На классах построена работа всех современных js-фреймворков. Раньше были в основном ОБЪЕКТЫ или ФУНКЦИИ, создающие ОБЪЕКТЫ, сейчас КЛАССЫ.

## Class creation

```js
class SomeClass {
  constructor() {
    // class properties
    this.prop1 = ...;
    this.prop2 = ...;
  }

  // class methods
  method1() { ... }
  method2() { ... }
}
```

## Constructor

Вызывается всегда при создании экземпляров класса. Встроенный метод класса. Функция. Конструктору можно добавлять аргументы.

```js
class SomeClass {
  constructor() { console.log('Hello, World!') }

  // class method
  sayHi() { console.log('HI!') }
}

// create examle of class (Создание экземпляров классе)
new SomeClass(); // 'Hello, World!'

const some = new SomeClass();
some.sayHi(); // access to class-methods
```

## Class properties

With constructor syntax:

```js
class Someclass {
  constructor() {
    this.prop1 = 'Some text';
    this.prop2 = 'Some another text';
  }
}

const some = new Someclass();
console.log(some.prop1); // 'Some text'
```

New short syntax:

```js
class Someclass {
  prop1 = 'Some text';
  prop2 = 'Some another text';
}

const some = new Someclass();
console.log(some.prop1); // 'Some text'
```

## Constructor with params

В такой форме записи обязательно нужно записывать constructor.

```js
class Someclass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  showFullName() {
    console.log(this.firstName, this.lastName);
  }
}

const some = new Someclass('Jack', 'Sparrow');
console.log(some.firstName); // 'Jack'

some.showFullName(); // access to class methods
```

## Class extends

```js
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.canSwin = true;
  }

  showFullname() {
    console.log(this.firstname, this.lastname);
  }
}
```

Cоздаём новый класс, который наследует свойства другого класса. **super()** нужно записывать в конструкторе для наследования свойств родителя.

```js
class JackSparrow extends Person {
  constructor() {
    super();
    this.firstname = 'Jack';
    this.lastname = 'Sparrow';
  }
}
```

```js
const jack = new JackSparrow();
jack.showFullname(); // Jack Sparrow - метод наследовался
jack.canSwim;        // true - свойство наследовалось
```

Короткая запись:

```js
class JackSparrow extends Person {
  firstname = 'Jack';
  lastname = 'Sparrow';
}

const jack = new JackSparrow();
jack.showFullname(); // Jack Sparrow - метод наследовался
jack.canSwim;        // true - свойство наследовалось
```
