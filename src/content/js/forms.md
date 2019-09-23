# Forms

```javascript
// collection
docuement.forms;

// form tag by id
const someForm = docuement.forms['some-id'];

// forms inputs with ids
someForm['some-input-1'];
someForm['some-input-2'];

// validity (Объект и подобъект, кот. хранят в себе валидацию)
someElement.validity.ValidityState;

// value (Присваивание значений поля)
someElement.value = 2;

// id
someElement.id = 'some-id';

// type (Тип поля)
someElement.type = 'email';

// min-max (Макс. и минимальные значения полей)
someElement.min = 0; 
someElement.max = 10;

// selected
someElement.selected = true;

// checked
someElement.checked = true;
```
