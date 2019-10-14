# Promise

## Асинхронность, колбэки

Асинхронное выполнение кода. Event loop. Стек событий.

Раньше были колбеки. Последовательная асинхронность. Большая вложенность колбэков (((). Колбэк-функция - функция, стоящая как аргумент родительской функции, будет выполняться, после выполнения оновного кода.

```js
// callback
setTimeout(() => {
  // этот код выполниться через колбек 2000
  console.log('Server request ...');
  const data = { server: 'avs', port: 2000, code: 404 }

  // этот код выполниться через второй колбэк через 5000
  setTimeout(() => { console.log('Server response: ', data) }, 5000);
}, 2000);
```

Сейчас промисы. Упрощают работу с асинхронными операциями. В JS сущствует глобальный класс Promise, от которого можно создавать экземпляры.

resolve(value) и reject(error) - колбэки функции.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Data loading...');

    const data = {
      name: 'John Smith',
      age: 33,
    }
    resolve();
  }, 3000)
});

promise.then(() => {
  console.log('Data received');
});
```

## Fetch
