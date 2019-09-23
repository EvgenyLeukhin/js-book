# Events

click, submit, dblclick, keydown, keyup, keypress, mouseover, mouseout, reset, focus, focusin, focusout, change, blur

## Event loop

Бесконечный цикл, который постоянно крутиться интерпретатором и улавливает все события.

После того, как отлавливает события, то записывает их в СТЕК(очередь) ЗАДАЧ.

Задачи выполняются АСИНХРОННО, это означает, что если какая-либо задача выполняется, то Event loop не прекращается свою работу, а будет улавливать все события постоянно.

## click

```js
el.addEventListener('click', (event) => {
  event.preventDefault(); // reset default events if they are
  // do smth
});
```

## keydown [list](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)

```js
el.addEventListener('keydown', function(e) {
  // js for keypress;
  if (e.keyCode == 27) { ... }
});
```

## onchange

```js
// onchange
el.onchange = () => { ... }
```

## onsubmit

Успешная отправка формы. Хорошо добавлять в куки значения полей при этом событии

```js
// onsubmit
el.onsubmit = () => { ... }
```

## onload

Событие на загрузку

```html
<body onload="alert('Страница загружена');">
```
