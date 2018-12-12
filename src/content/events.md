# Events
## onClick 
```js
state = { some: 'Some' }
changeName = () => this.setState({ some: 'Some another'})
...
<h1 onClick={this.changeName}>{this.state.some}</h1>)
```
## onChange 
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

## Bind
```js
class App extends Component {

  writeName = (name) => alert(`Hello, ${name}!`);

  render() {
    return (
      <div>
        {/* 1 aproach - better way */}
        <SomeComponent click={this.writeName.bind(this, 'Zhenia')} />
        <SomeComponent click={this.writeName.bind(this, name)} />
        {/* 2 aproach  - 1 is better */}
        <SomeComponent click={() => writeName('Zhenia')} />
      </div>
    );
  }
}
```
