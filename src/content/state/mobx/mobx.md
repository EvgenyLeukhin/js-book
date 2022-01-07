# MobX

[Docs](https://mobx.js.org/README.html)
[Understanding Mobx](https://github.com/jeromepl/understanding-mobx)

В mobX может быть несколько сторов. Не иммутабильность. Все подписчики на стейт будут перерендориваться.

В MobX в отличие от Redux state является изменяемым и не нужно возвращать каждый раз новый стейт, возвращаться будет измененный стейт.

Основные концепции Mobx:

* State (initial state)
* Actions (state changes methods)
* Derivation (computed values from the state)
* Reaction (autorun)

## Install for React

```npm i --save mobx```

```npm i --save mobx-react-lite``` - if only function components

```npm i --save mobx-react``` - with class components

