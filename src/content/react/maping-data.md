
# Maping data
Maping data may be from the state or from the external json-file.

```js
import SomeComp2 from 'SomeComp1';
...
class SomeComp1 extends Component {
  state = {
    contacts: [
      { id: 0, name: 'John', age: 32 },
      { id: 1, name: 'Steve', age: 35 },
      { id: 2, name: 'Nancy', age: 29 },
    ]
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
        {
          contacts.map((item, index) => ( // index - [index] of array
            <SomeComp2
              name={item.name} 
              age={item.age} 
              key={item.id} 
            />
          );
        }
      </>
    );
  }
}
```

## Maping - shortcut
```js
// SomeComp2.jsx
const SomeComp2 = props => {
  const { name, email, city } = props.contacts;

  return(
    <div className="card">
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

// data.json
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

// SomeComp1.jsx
import data from 'data.json';
...

const { contacts } = data;

{
  contacts.map((items, index)  => (
    <SomeComp2 contacts={items} key={id} />
  ))
}
```
