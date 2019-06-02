# Transitions

## CSSTransition

```js
import { CSSTransition } from 'react-transition-group';

class Transitions extends Component {
  state = { show: true }
  
  toggleText  = () => this.setState({show: !this.state.show});

  render() {
    const { show } = this.state;

    return (
      <>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="square"
        >
          <div className="square" />
        </CSSTransition>

        <button onClick={this.toggleColor}>{show ? 'Red' : 'White'}</button>
      </>
    );
  }
}

...
```

## Styles
```scss
.square {
  // 0 - static styles
  background: white;

  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
  cursor: pointer;
  transition-duration: .5s; // должно совпадать с timeout
  transition-timing-function: ease;

  // 0 ---*---> 1
  // click I (start-IN) - промежуточный класс
  &-exit-active {
    background: yellow;
  }

  // 0 ------> 1*
  &-exit-done {
    background: red;
  }

  // 1 ---*---> 2
  // click II (start-OUT) - промежуточный класс
  &-enter-active {
    background: orange;
  }

  // 1 ------> 2*
  // fourth click (end-OUT)
  &-enter-done {
    background: white;
  }
}

// цвета на 0 и на 2 должны совпадать
```
