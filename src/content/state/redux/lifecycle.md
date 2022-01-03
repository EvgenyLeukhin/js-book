# Lifecycle methods in React

FBC has only render() lifecycle-method, it returns only jsx.

CBC has all React lifecycle-methods.

---

## Mounting

* ### constructor()

Классовый конструктор, запускается при инициализации компонента.

* ### componentWillMount()

Метод перед отрисовкой jsx-кода.

```js
 // do something before render jsx
componentWillMount() { ... }
```

* ### render()

Метод отрисовки jsx-кода.

```js
render () { ... }
```

* ### componentDidMount()

Метод после отрисовки jsx-кода. Запросы на сервер. Добавление листенеров.

```js
componentDidMount() {
  // fetch data
  // addEventListener
}
```

* ### componentWillUnmount

Метод, запускающийся перед "исчезновением" компонента. Удаление листенеров.

```js
componentWillUnmount() {
  // removeEventListener
}
```

---

## Update

* ### componentWillReceiveProps()

* ### shouldComponentUpdate()

* ### componentDidUpdate

Метод, запускающийся при обновлении компонента. Получение новых props или изменение state.

```js
```
