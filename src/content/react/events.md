# Events
## <u>onClick</u> (simple click)
```js
...
state = { some: 'Some' }

changeName = () => this.setState({ some: 'Some another'})
...
<h1 onClick={this.changeName}>{this.state.some}</h1>
```

## <u>onChange</u> (change form input)
```js
export default class App extends React.Component {

  state = {
    outputText: 'Some output text'
  }

  dunamicOutput = e => {
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
## <u>onMouseLeave</u>
```js
<h1 onMouseLeave={this.someFunc}>Some text</h1>
```

## Event object
```js
writeEvent  = e => console.log(e);

// show current element
writeTarget = e => console.log(e.target);

// show current value in element
writeTarget = e => console.log(e.target.value);

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
## Event object
```js
writeEvent  = e => console.log(e);

// show current element
writeTarget = e => console.log(e.target);

// show current value in element
writeTarget = e => console.log(e.target.value);

```

## Show some components prop-data
```js
showId = id => { alert(id); }

// when maping component
click={this.showId.bind(this, items.id)}

```
