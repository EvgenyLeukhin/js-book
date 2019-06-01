# Switchers

## ? operator
```js
...
state = { toggle: false }
...
{ 
  toggle ? (
    <>
      <p>some</p>
    </> 
  ) : <p>some another</p>
}
...
```

## && operator
```js
...
state = { show: false }
...
{ 
  show && (
    <>
      <p>email</p>
      <p>city</p>
    </>
  );
}
...
```

## Classnames
``` npm i --save-dev classnames ```
```js
...
import cln from 'classnames';

class Layout extends React.Component {
  state = {
    hightlight: false,
  };

  hightlightToggle = () => {
    const { hightlight } = this.state;
    this.setState({ hightlight: !hightlight });
  };

  render() {
    const { hightlight } = this.state;

    return (
      <>
        <button 
          className={cln('btn', {'hightlight': hightlight })}
          onClick={this.hightlightToggle}
        >
          {!hightlight ? 'Click me' : 'Clicked'}
        </button>
      </>
    );
  }
}
```

## let
```js
class App extends Component {

  state = {
    contentShow: false
  }

  contentToogle = () => {
    const { contentShow } = this.state;
    this.setState({ contentShow: !contentShow });
  }

  render() {
    let someContent = null;
    const { contentShow } = this.state;

    if (contentShow) {
      someContent = (
        <>
          <h4>Some title</h4>
          <p>Some content</p>
        </>
      );
    }

    return (
      <div>
        <button 
          onClick={this.contentToogle}
        >
          { !contentShow ? 'Show content' : 'Hide content' } 
        </button>
        {someContent}
      </div>
    );
  }
}
```


<!-- ## Toggle
```js
{this.state.showContacts ? 
    <React.Fragment>
      <p>{email}</p>
      <p>{city}</p>
    </React.Fragment> : null
  } -->
