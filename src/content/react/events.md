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
    outputText: ''
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

## Show some components prop-data
```js
showId = id => { alert(id); }

// when maping component
click={this.showId.bind(this, items.id)}

```
## Listeners
```js
...
class Resize extends Component {
  state = {
    windowWidth: null
  };

  resizeListener = () => {
    let updateWidth  = window.innerWidth;
    this.setState({ windowWidth: updateWidth });
  };

  componentDidMount() {
    this.resizeListener();
    window.addEventListener('resize', this.resizeListener);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  render() {
    const { windowWidth } = this.state;

    if (windowWidth > 600) { return(<Red />);   }
    else                   { return(<Green />); }
  };
};

...
```

## react-click-outside
```js
import clickOutsideHOC from 'react-onclickoutside';

...
handleClickOutside = () => {
  this.setState({ open: false });
};

...

export default clickOutsideHOC(User);
```
