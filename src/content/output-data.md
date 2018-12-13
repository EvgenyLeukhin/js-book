# Output data
```js
import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const { name, age } = this.props.contact;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John',
          age: 32,
        },
        {
          id: 2,
          name: 'Jack',
          age: 33,
        },
      ]
    }
  }
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(item => (
          // <Contact
          //   name={item.name}
          //   age={item.age}
          //   key={item.id}
          // />

          <Contact contact={item} /> // short way
        ))}
      </div>
    )
  }
}
```

# Передача напрямую

```js
class Contacts extends Component {
  render() {
    return(
      <div className="card">
        <h4>{this.props.name}</h4>
        <p>{this.props.email}</p>
        <p>{this.props.city}</p>
      </div>
    )
  }
}


<Contacts
  name='John Smith'
  email='js@gmail.com'
  city='New York'
/>
<Contacts
  name='Adam Anderson'
  email='aa@gmail.com'
  city='Chicago'
/>
```

# Через state
```js
state={
  contacts: [
    {
      name: 'John Smith',
      email:'js@gmail.com',
      city: 'New York',
    },
    {
      name: 'Adam Anderson',
      email:'aa@gmail.com',
      city: 'Chicago',
    },
  ]
}


<Contacts
  name={this.state.contacts[0].name}
  email={this.state.contacts[0].email}
  city={this.state.contacts[0].city}
/>
<Contacts
  name={this.state.contacts[1].name}
  email={this.state.contacts[1].email}
  city={this.state.contacts[1].city}
/>
```

# Мапинг state
```js
{this.state.contacts.map((item, index)  => (
  <Contacts
    name={item.name}
    email={item.email}
    city={item.city}
    key={index}
  />
))}
```

# Мапинг state - shortcut
```js
const ContactsShort = (props) => {
  const {name, email, city} = props.contactsData;
  return(
    <div className="card">
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

{contacts.map((items, index)  => (
  <ContactsShort contactsData={items} key={index} />
))}
```
# JSON-файл
```js
{
  "contacts": [
    {
      "id": 0,
      "name": "John Jeyson",
      "email":"js@gmail.json",
      "city": "New York JS"
    },
    {
      "id": 1,
      "name": "Adam Jeyson",
      "email":"aa@gmail.json",
      "city": "Chicago JS"
    }
  ]
}

import data from './data.json';
```

# Мапинг JSON-файла
```js
{data.contacts.map((item, index)  => (
  <Contacts
    name={item.name}
    email={item.email}
    city={item.city}
    key={index}
  />
))}
```
# Мапинг JSON-файла shortcut
```js
{data.contacts.map((items, index)  => (
  <ContactsShort 
    contactsData={items} 
    key={index} 
  />
))}
```
