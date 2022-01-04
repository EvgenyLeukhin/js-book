# Fetch

Самый понятный и простой способ осуществления запросов к API.

Продвинутый вариант вместо устаревшего **XMLHttpRequest**. Выполняет асинхронные запросы. Возвращает промис.

Можно работать с такмими методами как **get, post**, запрашивать данные или файлы.

Ответы с fetch, чтобы получить данные, сперва нужно передать их в метод **json()**:

Информация о статусе запроса будет храниться в первом then.

## Fetch пример 1 (GET)

```js
fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => console.log(data.results));
```

## Fetch пример 2 (GET)

```js
// API
const API_URL = 'https://jsonplaceholder.typicode.com';
const endpoint = `${API_URL}/todos`;

// Фетчим эндпоинт
fetch(endpoint, { method: 'GET' })
  // fetch возвращает промисс, поэтому нужно обрабатывать через .then()
  .then(response => {
    // console.log('response: ', response);

    // ОК - успешный запрос
    if (response.ok) {
      // при fetch пришедшие данные нужно распарсить методом .json()
      return response.json();
    }

  // NOT OK - неуспешный запрос
    else {
      console.log('error');
    }
  })
  .then(data => {
    // выводим обработанные ранее данные
    console.log('all data: ', data);

    return data.map((item, index) => console.log(`item-${index}: `, item));
  })
```

## Fetch пример 3 (POST)

```js
// какие данные отправляем
const data = { 
  email: 'user@gmail.com',
  password: '123',
};

fetch('https://example.com/profile', {
  // fetch options
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },

  // вставляем данные в body
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

## Fetch data in React

### api.js

```js
const baseURL = 'https://swapi.co/api';
export default baseURL;
```

### CBC with fetch

```js
import baseUrl from 'api.js';

class FetchPage extends Component {

  state = {
    people: [],
    loading: false,
    error: null,
  };

  // fetch data after render
  componentDidMount() { 
    // this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });

    // fetch url
    fetch(`${baseUrl}/people/`)

      // return json
      .then(res => {
        if (res.ok) { return res.json(); }
        else {
          throw new Error(`${res.status} - Couldn't fetch`),
          this.setState({ loading: false, error: true });
        }
      })

      .then(resJSON => {
        this.setState({
          people: resJSON.results,
          loading: false,
        })
      }
    )
  };

  render() {
    const { people, loading } = this.state;

    return (
      <>
        <button onClick={this.fetchData}>Fetch data</button>

        {
          loading ? <p>Loading ...</p> :
            <ul>
              {people.map((item, index) =>
                <li key={index}>{item.name}</li>
              )}
            </ul>
        }
        { error && <p>Error - Could not fetch</p> }
      </>
    );
  }
}

export default FetchPage;
```
