# Асинхронность, callback

Неблокирование выполнения кода (неблокирующий ввод-вывод). Стек событий. Event loop. В JS есть стек событий (очередь), куда записываются все асинхронные события. Асинхронное программирование. Таймеры, запросы, анинхронные функции.

Изменение html-разметки без перезагрузки страницы.

Запросы к серверу - для чего чаще всего используется асинхронность. А также для тех задач, которые не могут быть выполненны моментально и для каких-либо действий по изменению разметки или содержимого страницы без перезагрузки.

## setTimeout()

Асинхронный браузерный метод. Принимает 2 параметра. Первый принимает функцию, которую нужно выполнить через время, указанное в мс во втором параметре. Можно использовать для имитации запроса к серверу.

```js
setTimeout(() => {
  console.log('Hello, World!');
}, 3000);
```

## Loading <script> tags

```js
function loadScript(src, callback) {
  // создаем тэг <script>
  let script = document.createElement('script');

  // coxpaняем его src в параметр src
  script.src = src;

  // навешиваем для него событие загрузки,
  // по окончанию которого будет вызываться callback
  // и передаем ему параметр созданного скрипта
  script.onload = () => callback(script);

  // после окончания загрузки скрипта, вставляем его в <head>
  document.head.append(script);
}

// вызываем данную функцию
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {

  // а колбэк вызовится после загрузки
  alert(`Здорово, скрипт ${script.src} загрузился`);

  // и можно вызывать глобальные функции этого скрипта
  alert( _ ); // функция, объявленная в загруженном скрипте
});
```

## Callback inside callback

Цепочка колбеков.

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

// I
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, первый скрипт ${script.src} загрузился`);
  alert( _ ); // вызов функции loadash

  // II
  loadScript('https://code.jquery.com/jquery-3.4.1.min.js', script => {
    alert(`Здорово, второй скрипт ${script.src} загрузился`);

    // вызов функции jquery
    $(() => { $('body').css('background-color', 'maroon') });

    // III
    loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', script => {
      alert(`Здорово, третий скрипт ${script.src} загрузился`);
    });
  });
});
```

## Обработка ошибок внутри колбеков

Добавляем новый параметр в callback-функцию для обработки ошибок. 

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  // error - аргумент колбека для ошибики, script не будет передаваться («error-first callback»)
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`), null);

  // null - аргумент колбека для ошибики, script будет передаваться при успешной загрузке
  script.onload = () => callback(null, script);

  // после окончания загрузки скрипта, вставляем его в <head>
  document.head.append(script);
}

// I
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(error, script) {
  // handleError
  if (error) { console.log('404 - Loading error') }
  else {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert( _ ); // loadash method

    // II
    loadScript('https://code.jquery.com/jquery-3.4.1.min.js', function(error, script) {
      // handleError
      if (error) { console.log('404 - Loading error') }
      else {
        alert(`Здорово, скрипт ${script.src} загрузился`);
        $(() => { $('body').css('background-color', 'maroon') }); // jquery method
      }
    });
  }
});
```

Если нужно выполнить несколько асинхронных операций, то возникает ПИРАМИДА вызовов, что не украшает код. Есть смысл пользоваьтся колбеками, если асинхронных действий 2-3, если будет больше, то читаемость кода усложняется, нужно использовать промисы.
