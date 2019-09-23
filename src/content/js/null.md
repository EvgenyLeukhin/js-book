# Null & Undefined

## Null

Null is an empty type. Means nothing. The variable with no data.

```js
let a = null;

typeof a; // null
```

## Undefined

Variables take undefined when we inizialize them, but didn't give them any data. The situation when data do not commes to variable. Server respond error.

```js
let a;

typeof a; // undefined
```

We can give this type direcly, but it is bad practice.

```js
let a = true;

a = undefined;

typeof a; // undefined
```


