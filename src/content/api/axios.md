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

## Axios пример 2 (GET)

```js
import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default getCampaing;
```

## Axios пример 3 (GET c фильтром)

```js
import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getCompanies = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/companies`,
    {
      params: {
        'filter': {
          'where': {
            'name': { 'like': `%${inputValue}%`}
          },
          'limit': 10
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default getCompanies;

```

## Axios пример 4 (DELETE)

```js
import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const deleteCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/vacancies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteCampaing;

```

## Axios пример 5 (POST)

```js
import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const login = (name, password) => {
  return axios.post(
    `${API_URL}/${subUrl}/login`,
    { name, password },
  );
}

export default login;
```
