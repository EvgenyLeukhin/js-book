# Events
## onClick (click or touch)
```js
state = { some: 'Some' }
changeName = () => this.setState({ some: 'Some another'});
...
  <h1 onClick={this.changeName}>{this.state.some}</h1>)
...
```

## onChange (change input value)
```js
export default class App extends React.Component {

  state = {
    outputText: 'Some output text'
  }

  dunamicOutput = (e) => {
    this.setState({ outputText: e.target.value }); // change state
    console.log(e.target.value); // output in console
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.dunamicOutput} />
        <p>{this.state.outputText}</p>
      </div>
    );
  }
}
```

## Event object
```js
writeEvent  = (e) => console.log(e);

// show current element
writeTarget = (e) => console.log(e.target);

// show current value in element
writeTarget = (e) => console.log(e.target.value);

```

## Bind
```js
// need to bind
someFunc() {console.log(123)}
onClick={this.someFunc.bind(this)}

// don't need to bind (arrow func)
someFunc = () => {console.log(123)}
onClick={this.someFunc}
```

## Show some component data
```js
showId = (id) => { alert(id);}

// when maping component
click={this.showId.bind(this, items.id)}

```

## Delete item
```js
class Events extends Component {
  // переносим json в state
  state = { 
    contacts: dataJson.contacts,
  }

  deleteItem = (id) => {
    const { contacts } = this.state;

    // фильтруем через id
    const newContacts = contacts.filter(item => {
      return item.id !== id;
    });
    this.setState({contacts: newContacts});
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map((items)  => (
          <Contacts 
            key={items.id}
            contactsData={items}
            
            // удаление по клику
            click={this.deleteItem.bind(this, items.id)}
          />
        ))}
      </div>
    )
  }
}
```
# onMouseLeave
