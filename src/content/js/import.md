# Import/export

Можно экспортировать-импортировать любые классы, константы, функции. Это новые возможности ES6.
Если export без default, то импортировать нужно в фигурных скобках и можно изменить название этой переменной.

```js
const = person {
  name: 'Evgeny'
}

const = address {
  city: 'Omsk'
}

// экспортируем константы
export default person;
export address;
```

```js
// импортируем константу в другом файле
import person from './person.js';
import { address } from './person.js';

// или с изменением имена
import { address as Add } from './person.js';

// импортировать всё
import * as all from './person.js';
```
