# localStorage

Лимит 2 Мб+, зависит от браузера. Данные не имеют «времени истечения» как в куках. «Переживает» перезапуск браузера (закрытие и обновление) в отличие от sessionStorage.

```js
// записать
localStorage.setItem('test', 1);

// взять
alert( localStorage.getItem('test') ); // 1

// удалить
localStorage.removeItem(key);

// удалить все
localStorage.clear();
```
