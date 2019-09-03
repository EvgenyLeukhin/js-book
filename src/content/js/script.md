# Script

## Тэг &lt;script&gt;
```html
// JS-code inside
<script>
  alert('Hello, World!');
</script>

// external file - .js extention
<script src="file.js"></script>

// if JS is turn off in a browser
<noscript>
  <p>Please, turn on JS!</p>
</noscript>
```

Если тег с аттрибутом src, то код внутри него будет игнориться.

## Подключение к html-странице

Загрузка и выполнение скриптов зависит от их места нахождения в html-коде, при этом по умолчанию когда html-парсер дойдет до скрипта, будет блокироваться дальнейшая отрисовка html и браузер будет ждать пока скрипт загрузиться и выполниться.

* **Внутри &lt;head&gt;** - html будет ждать (не будет отрисовываться, пока скрипт не загрузится и не выполниться) загрузку и выполнение скрипта
* **Перед &lt;/body&gt;** - отрисовка html не будет блокироваться загрузкой и выполнением скрипта. Best practice. 

Загрузкой скриптов можно управлять с помощью аттрибутов async и defer и их расположение в html-коде уже не будет влиять.

```html
<script async src="file.js"></script>

<script defer src="file.js"></script>
```

## Async

Скрипт загружаться будет сразу. Во время загрузки не будет блокироваться html-код. Но как только скрипт загрузиться, отрисовка html блокируется и скрипт выполняется. 

Если скриптов с async несколько, то порядок их загрузки и выполнения может не совпать с порядком в коде. Какой скрипт згрузится первым - тот и будет первым выполняться.

## Defer

Скрипт загружаться будет сразу. Во время загрузки не будет блокироваться html-код. Даже когда скрипт загрузился, он будет ждать полной отрисовки html и не будет выполняться пока html-код не отрисуется полностью.

Если скриптов с defer несколько, то порядок их выполнения БУДЕТ СОВПАДАТЬ с порядком в коде (пока не выполнился первый, второй будет ждать, даже если загрузился раньше)

## Comments

```js
// one line comment

/*
  multi
  line
  comment
*/
```