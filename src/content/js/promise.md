# Promise

Имеет статию **pending** - ожидание. Pending может стать выполненным (сдержанным) **resolved** - и цеппочка выполнения действий внутри промиса продолжится (then - затем) или несдержанным **rejected** - цепочка обрывается.

## Basic syntax

```js
someFunc()
  .then(someFunc1)
  .then(someFunc2)
  .then(someFunc3)
  .catch(someFunc3) // catch errors
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

## Fetch, axios

Возвращают промисы
