# Libs

## Axios [(link)](https://github.com/axios/axios)

```npm install axios```

```js
// login 
import axios from 'axios';

import API_URL from './apiUrl';

const logIn = (email, password) => {
  return axios.post(`${API_URL}/users/login?include=user`, { email, password })
    .then(res => res.data)
}

export default logIn;


// logOut
import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const logOut = () => {
  return axios.post(
    `${API_URL}/users/logout`, {},
    {
      headers: { Authorization: token }
    }
  ).then(() => {
    // remove token
    localStorage.removeItem('ph-admin-user-data');

    // TODO
  }).catch((error) => {
    console.log(error);
    localStorage.removeItem('ph-admin-user-data');
  })
};

export default logOut;



// delete
import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const deleteRequest = (dataPath, id) => {
  return axios.delete(
    `${API_URL}/${dataPath}/${id}`,
    {
      headers: { Authorization: token }
    })
};

export default deleteRequest;
```

***

## React-table [(link)](https://www.npmjs.com/package/react-table)

```npm i --save react-table```

```js
// customFiltering.js
import React from 'react';
import { Input } from 'debounce-input-decorator';

const customFiltering = (filter, onChange) => {
  return (
    <Input
      style={{ width: '100%' }}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      debounceTimeout={800}
    />
  );
}

export default customFiltering;



import ReactTable from 'react-table';

const idColumn = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => <div>{original.id || '...'}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  }
];

<ReactTable
  data={this.state.data}
  manual={true}
  pages={this.state.count}
  resizable={true}
  filterable={true}
  loading={loading}
  className="-striped -highlight"
  columns={[...idColumn, ...this.props.columns, ...controlsColumn]}
  dataPath={this.props.dataPath}
  startOrder={this.props.startOrder}
  onFetchData={state => {
    // use ReactTable own state to forming a request
    // it refresh always when we're doing any actions with this table
    this.setState({ loading: true });

    // axios -> getCount
    getCount(state, this.props.dataPath)
      .then(count => this.setState({ count: Math.ceil(count / state.pageSize) }))

      // axios -> getData
      .then(() => getData(state, this.props.dataPath, this.props.startOrder))
      .then(data => this.setState({ data, loading: false }))
  }}
/>
```

***

## React-modal [(link)](https://github.com/reactjs/react-modal)

```npm i --save react-modal```

```js
import React from "react";
import ReactModal from 'react-modal';

// props
({ type, modalIsOpen, closeModal, itemOriginal, deleteRequest, modalLoading })

<ReactModal
  ariaHideApp={false}
  isOpen={modalIsOpen}
  overlayClassName="ReactModal__Overlay"
  className={`ReactModal ReactModal__${type}`}
  onRequestClose={modalLoading ? false : closeModal}
> ...
```

***

## Lodash [(link)](https://lodash.com)

```npm i --save lodash```

***

```js
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isNan from 'lodash/isNaN';
import isEmpty from 'lodash/isEmpty';
import isBoolean from 'lodash/isBoolean';
```

### Lodash - throttle

Прерывает событие на какое-либо значение в милисекундах, чтобы не перегружать производительность. Событие будет отрабатывать только через определенный интервал времени.

```js
import throttle from 'lodash/throttle';

class Some extends React.Component {
  constructor(props) {
    super(props);
    this.resizeListenerThrottled = throttle(this.resizeListener, 100);
  }

```

## Date-fns [(link)](https://date-fns.org/)

```npm i --save date-fns```

```js
import {
  format,
  addDays,
  subDays,
  addWeeks,
  isDate,
  parseISO,
  endOfMonth
} from 'date-fns';
```

## React-nestable [(link)](https://www.npmjs.com/package/react-nestable)

```npm i --save react-nestable```

***

## React-datepicker [(link)](https://www.npmjs.com/package/react-datepicker)

```npm i --save react-datepicker```

***

## React-select [(link)](https://www.npmjs.com/package/react-select)

```npm i --save react-select```

***

## React-responsive-modal [(link)](https://www.npmjs.com/package/react-responsive-modal)

```npm i --save react-responsive-modal```

***

## React-onclickoutside [(link)](https://www.npmjs.com/package/react-onclickoutside)

```npm i --save react-onclickoutside```

***

## React-loader-spinner [(link)](https://www.npmjs.com/package/react-loader-spinner)

```npm i --save react-loader-spinner```

***

## React-sortable-hoc [(link)](https://github.com/clauderic/react-sortable-hoc)

```npm i --save react-sortable-hoc```

***

## React-device-detect [(link)](https://www.npmjs.com/package/react-device-detect)

```npm i --save react-device-detect```

***
