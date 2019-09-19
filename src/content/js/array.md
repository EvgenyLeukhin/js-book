# Array

## Syntax

```js
let array = ['First', { name: 'John' }, true];

array[0];           // 'First'
array[0] = 'FIRST'; // change item

array.length;       // 3 (length of array)
```

## Array of objects

```js
const data = [{}, {}, {}];
```

## pop/push, shift/unshift

```js
// add new items to the end of array
array.push('New item 1', 'New item 2', 'New item 3');


// add new items to the begining of array
array.unshift('New item 1', 'New item 2', 'New item 3');

// delete first item from array
array.shift();

// delete last item from array
array.pop();
```

## Rest, spread operator

