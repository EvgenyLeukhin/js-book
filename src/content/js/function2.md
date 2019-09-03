## Anonimus funcs by variables

Функции в JS ведут себя как объекты. Можно вызывать функции через переменные.

```js
// WORK
const summing = function(a, b) {
  return (a + b);
};
summing;       // ошибки не будет (обращение REFERENCING)
summing(1, 2); // 3 вызов (CALL)

// ERROR
function(a, b) {
  return (a + b);
};
```

## Анонимная самовызывающаяся функция

Будет выполняться при загрузке. Чаще всего встречаются в замыканиях или в качестве аргумента другой функции.

```js
(function() {
  console.log('Something');
})();

// with params
(function(text) {
  console.log(text);
})('Something');

setTimeout(
  function() { console.log('Test') },
  1000
);
```

## Methods

Можно обращаться к анонимным функциям внутри объектов через свойства. ООП.

```js
const car = {
  color: 'green',
  old: function(text) {
    console.log(text);
  },
  new(text) {
    console.log(text);
  },

  // this-keyword is a reference to current object
  showColor() {
    return `${this.color}`;
  }
};

car.open;             // ображение к методу (покажет тело функции)
car.old('Открыто!');  // вызов метода объекта car
car.new('Открыто!');  // вызов метода объекта car

```

## This

Это что-то вроде переменной, которая автоматически создается у объектов и функций, ограничивается {}, разные this друг о друге ничего не знают. 


## Замакания, Call-back, рекурсия
