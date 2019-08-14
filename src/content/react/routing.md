# Routing [*(link)*](https://reacttraining.com/react-router/web/example/basic)
## Add routing
```js
import { HashRouter as Router } from 'react-router-dom';
// or BrowserRouter
...

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Layout/>
    </ScrollToTop>
  </Router>,

  document.getElementById('app')
);
```

## ScrollToTop
```js
import React from 'react';
import { withRouter } from "react-router";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
```

## Switch
```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => <main className='markdown-body'>
  <Switch>
    <Route path='/'    exact     component={Home}/>
    <Route path='/base-template' component={BaseTemplate}/>
    <Route path='/configs'       component={Configs}/>
    ...
    <Route                       component={Page404} />
  </Switch>
</main>
```

## Navlinks
```js
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  fontWeight: 'bold',
  cursor: 'default',
  textShadow: '0 0 15px #000'
}

export default () => <ul className='links-list'>
  <li><NavLink to='/' exact        activeStyle={styles}>Home</NavLink></li>
  <li><NavLink to='/base-template' activeStyle={styles}>Base template</NavLink></li>
  <li><NavLink to='/configs'       activeStyle={styles}>Configs</NavLink></li>
  ...
</ul>

```
## Props
```js
<Route path='/post/:id'/>

// id страницы
props.match.params.id;

// роутинг по id
<Route path='/products/:id' component={Products}/>
<Route path='/products/:id' component={ProductsList}/>

// роутинг c render
<Route path='/some-route' render={() => <ProductDetails />} />
```

## Redirect
```js
<Route exact path="/" render={() => <Redirect to="/react" /> } />
props.history.push('/');
```

## External links
```js
<a
  href="https://evgenyleukhin.github.io/HTML-CSS-book/index.html"
  rel="noopener noreferrer"
  target="_blank"
>
  External link
</a>
```
