```js
import React, { Component } from 'react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

class Transitions extends Component {
  state = {
    show: true,
    show2: true
  }
  
  toggleText  = () => this.setState({show: !this.state.show});
  toggleColor = () => this.setState({show2: !this.state.show2});

  render() {
    const { show, show2 } = this.state;
    const duration = 200;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0 },
      entered:  { opacity: 1 },
    };

    return (
      <>
        {/* in style tag */}
        <h2>&lt;Transition&gt;</h2>
        <Transition in={show} timeout={duration}>
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade Transition!
            </div>
          )}
        </Transition>

        <button onClick={this.toggleText}>{show ? 'Hide' : 'Show'}</button>
        <hr/>


        {/* css-classes */}
        <h2>&lt;CSSTransition&gt;</h2>
        <CSSTransition
          in={show2}
          timeout={500}
          classNames="square"
        >
          <div className="square" />
        </CSSTransition>
        <button onClick={this.toggleColor}>{show2 ? 'Red' : 'White'}</button>
        <hr/>


        <h2>&lt;TransitionGroup&gt;</h2>
        <p>TODO</p>
      </>
    );
  }
}
export default Transitions;
```
