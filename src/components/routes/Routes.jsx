import React from 'react';
import { Switch, Route } from 'react-router-dom';

const MdComp = props => {
  return (
    <div dangerouslySetInnerHTML={{__html: props.mdPath.__content}} />
  );
}

// main pages
const Home    = () => <MdComp mdPath={ require('React/index.md') }/>
const JS      = () => <MdComp mdPath={ require('JS/index.md') }/>
const Webpack = () => <MdComp mdPath={ require('Webpack/index.md') }/>
const NodeJs  = () => <MdComp mdPath={ require('NodeJs/index.md') }/>

// react-pages

// js-pages

// webpack-pages

// nodejs-pages


const Routes = () => {
  return (
    <main className='markdown-body'>
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/js'      component={JS} />
        <Route path='/webpack' component={Webpack} />
        <Route path='/nodejs' component={NodeJs}/>
      </Switch>
    </main>
  );
}

export default Routes;
