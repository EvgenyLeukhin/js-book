# Output data
In React almost all data pass from the components props or from the components state.
All data often save in json-files.

## From the props
```js
// SomeComp1.jsx
...
class SomeComp1 extends Component {
  render() {
  const { name, age, click } = this.props; 

    return (
      <div className="card">
        <h4>{name}</h4>
        <p>{age}</p>
        <button onClick={click}>Button</button>
      </div>
    );
  }
}
...

// SomeComp2.jsx
import SomeComp1 from 'SomeComp1';
...
class SomeComp2 extends Component {
  render() {
    return (
      <>
        <SomeComp1 name="John" age={33} click={this.someClassMethod1} />
        <SomeComp1 name="Steve" age={35} click={this.someClassMethod2} />
      </>
    );
  }
}
...
```

## From the state
```js
import SomeComp1 from 'SomeComp1';
...
class SomeComp2 extends Component {
  state = {
    contacts: [
      { id: 1, name: 'John', age: 32 },
      { id: 2, name: 'Steve', age: 35 },
    ]
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <SomeComp1 name={contacts[0].name} age={contacts[0].age} />
        <SomeComp1 name={contacts[1].name} age={contacts[0].age} />
      </>
    )
  }
}
```

## From a separate JSON-file
```js
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

...
import data from './data.json';

// SomeComp2.jsx
import SomeComp1 from 'SomeComp1';
...
class SomeComp2 extends Component {
  render() {
    return (
      <>
        <SomeComp1 
          name={data.contacts[0].name} 
          email={data.contacts[0].email} 
          city={data.contacts[0].city} 
        />
        <SomeComp1 
          name={data.contacts[1].name} 
          email={data.contacts[1].email} 
          city={data.contacts[1].city} 
        />
      </>
    );
  }
}

```
## From a separate const
```js
...
import SomeComp1 from 'SomeComp1';

const string = 'Some string';

class SomeComp2 extends Component {
  render() {
    return ( <SomeComp1  name={string} /> );
  }
}

```
