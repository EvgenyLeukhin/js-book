
# then, catch, finaly

## .then()

Обработчик resolve. Если в промисе передается что-ниб аргументом в resolve, то этот аргумент передается и в **then**.

Первый аргумент метода **.then** – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат. Вызывает **resolve** родительского промиса.

Второй аргумент **.then** – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку. Вызывает **reject** родительского промиса.

```js
promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);
```

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);
```

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise.then(
  result => alert(result), // не будет запущена
  error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
);
```

### Цепочка .then()

Если .then() у промиса несколько, то необходимо чтобы первый .then() возвращал какое-либо значение с помощью return для того, чтобы следущий .then() получал какое-либо значение из предыдущего и так далее.

## .catch()

Обработчик **reject**. Если в промисе передается что-ниб аргументом в **reject**, то этот аргумент передается и в **catch**. Если в каком-ниб then будет **reject**, то сработает **catch** и остальные **then** оборвуться. Выполниться, если внутри каких-либо then не обрабатывается ошибка (второй параметр).

Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое:

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это тоже самое, что promise.then(null, f)
promise.catch(error => alert(error)); // выведет "Error: Ошибка!" спустя одну секунду
```

Последнюю строку можно записывать короче:

```js
promise.catch(alert)
```

## .finally()

Метод, который выполняется в промисе в любом случае, независимо от результатов промиса (успешно или с ошибкой). **finally** хорошо подходит для очистки, например остановки индикатора загрузки, его ведь нужно остановить вне зависимости от результата.

**finally** не имеет аргументов.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});


promise.finaly(() => alert('Промис завершен'));
```

## async\await

Упрощает синтаксис, чтобы не записывать много **.then()**. Эта функция всегда возвращает промис.

**async** ставиться перед функцией. **await** внутри функции с **async**.

Создаем функцию, возвращающюю промис с таймером.

```js
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log(`Done after ${ms} ms`);
    }, ms)
  });
}
```

Создаем асинхронную функцию, в которой будем вызывать промисы. В таком виде функция стала анинхронной и возвращает промис, внутри нее можно использовать **await** и каждый метод "будет ждать" пока не выполниться передыдущий, код становиться анинхронным. Такую конструкцию можно было бы написать с помощью **then**, но такая запись выглядит короче.

```js
async function someFunc() {
  await delay(1000);
  await delay(2000);
  await delay(500);
  await delay(100);
}
```

Вызываем данную асинхронную функцию.

```js
someFunc();
```

## try\catch

Если нужен обработчик **reject** внутри, то нужно дополнить запись:

```js
async function someFunc() {
  try {
    await delay(1000);
    await delay(2000);
    await delay(500);
    await delay(100);
  } catch(error) { console.log(error); }
}
```

## Пример с загрузкой изображений

```js
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.height = 200;
    img.src = url;
    document.body.append(img);

    // RESOLVE //
    img.addEventListener('load', () => resolve(url));
    // img.onload = () => resolve(url); // or like this


    // REJECT //
    img.addEventListener('error', () => reject(url));
    // img.error = () => reject(url); // or like this
  });
}

// загружаем 1 картинку
loadImage('https://www.google.ru/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')

  .then(url => {
    alert(`КАРТИКА ${url} УСПЕШНО ЗАГРУЗИЛАСЬ`);

    // загружаем 2 картинку
    return loadImage('https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg');
  })

  .then(url => {
    alert(`КАРТИКА ${url} УСПЕШНО ЗАГРУЗИЛАСЬ`);

    // загружаем 3 картинку
    return loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mail.Ru_logo.svg/515px-Mail.Ru_logo.svg.png');
  })

  .then(url => alert(`КАРТИКА ${url} УСПЕШНО ЗАГРУЗИЛАСЬ`))

  .catch(url => alert(`КАРТИКА ${url} НЕ ЗАГРУЗИЛАСЬ`))
```

## С помощью async\await

```js
async function loadImages() {
  try {
    await loadImage('https://www.google.ru/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
    await loadImage('https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg');
    await loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mail.Ru_logo.svg/515px-Mail.Ru_logo.svg.png');
  } catch(url) {
    alert(`Изображение ${url} не загрузилось!`);
  }
}

loadImages();
```
