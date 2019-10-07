# Types

String constants in separate file **types.js**.

Лучше записывать названия actions в строковые переменные и импортировать в reducer, чтобы IDE подсвечивала ошибки (если записывать строками, то подсвечивать не будет).

```js
// types.js

export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export default {
  PLUS,
  MINUS
};
```
