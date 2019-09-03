# Boolean

Take only one value from true or false. Help to create a logic structures. 

```js
const a = true;

const b = false;
```

## Convertation

```js
Boolean(1); // true
Boolean(-1); // true
Boolean(0.1); // true

Boolean(0); // false

Boolean(' '); // true
Boolean(''); // false

Boolean(null); // false
Boolean(undefined); // false

Boolean([]); // true
Boolean({}); // true

Boolean(() => alert(123)); // true
```
