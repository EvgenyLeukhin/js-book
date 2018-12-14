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

### Load data from API to a component
```js
import React, { Component } from 'react';

// API
class ServerAPI extends Component {

  _apiBase = 'https://swapi.co/api';

  // шаблон запросов
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

  async getAllHeros() {
    const res = await this.getResource('/people/');
    return res.results;
  }

  getHero(id) { return this.getResource(`/people/${id}`) }
}


// Компонент, использующий API
class Example extends Component {
  // инициализация API в компоненте
  API = new ServerAPI();

  state = {
    name: null,
    height: null,
    mass: null,
    hair_color: null,
  }

  // делать запрос сразу при инициализации 
  constructor() {
    super();
    this.getDataToComponent();
  }

  // функция запрос данных
  getDataToComponent = () => {
   const id = Math.floor(Math.random() * 15 + 1);
    this.API
      .getHero(id)
      .then(heroObj => {
        this.setState({
          name: heroObj.name,
          height: heroObj.height,
          mass: heroObj.mass,
          hair_color: heroObj.hair_color,
        })
      })
  }


  render() {
    const {name, height, mass, hair_color} = this.state;
    return (
      <div>
        <button 
          style={{ background: 'tomato', cursor: 'pointer' }}
          onClick={this.getDataToComponent}>
          Get data from server
        </button>

        <p>Name:       <b>{name}</b></p>
        <p>Height:     <b>{height}</b></p>
        <p>Mass:       <b>{mass}</b></p>
        <p>Hair color: <b>{hair_color}</b></p>
      </div>
    )
  }
}

export default Example;
```
