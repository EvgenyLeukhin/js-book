# Server

## Fetch API - React Server API (standart)

### Выполнение запроса (Promise)
```js
fetch('https://swapi.co/api/starships/9/')
  .then((res) => {

    // код ответа
    // console.log('Got it!', res.status);

    return res.json();
  });
```

### Шаблонная функция
```js
const getResource = async (url) => {
  
  // запрос по url 
  const res = await fetch(url);

  // в случае 404
  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, Status ${res.status}`);
  }

  // в случае ок
  const body = await res.json();
  return body;
};
```
### Использование этой функции
```js
getResource('https://swapi.co/api/people/1/')
  
  // если ок
  .then((body) => {console.log(body);})

  // если не ок
  .catch((err) => {console.error('RESPONSE ' + err);})
```


### Api class
```js
import React, { Component } from 'react';

class ServerAPI extends Component {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    // запрос по url 
    const res = await fetch(`${this._apiBase}${url}`);
    // в случае 404
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, Status ${res.status}`);
    }
    // в случае ок
    return await res.json();
  };

  // асинхронная функция
  async getAllHeros() {
    const res = await this.getResource('/people/');
    return res.results;
  }

  // единичный запрос по id
  getHero(id) { return this.getResource(`/people/${id}`) }

  render() {
    return (
      <div>
        +++
      </div>
    );
  }
}

const getRequest = new ServerAPI();

// get Hero
getRequest.getHero(10).then(body => { console.log(body.name); })

// get All 
getRequest.getAllHeros().then(body => {
  body.forEach((element, index) => {
    console.log(`${index}: ${element.name}`);  
  });
});

export default ServerAPI;
```
