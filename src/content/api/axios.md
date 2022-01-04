# Axios

[Docs](https://github.com/axios/axios)

Fetch-based js-library.

Promise based HTTP client for the browser and node.js

```bash
npm install axios
```

Axios может обходиться без метода  **json()** как в fetch:


## Axios пример 1 (GET)

```js
axios.get('https://swapi.co/api/people/')
  .then(response => console.log(response));
```












```js
import axios from 'axios';

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// post
axios.post('/user', { 
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
