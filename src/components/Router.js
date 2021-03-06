import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {Error} from '.';
import Detail from '../Pages/Detail';
import Home from '../Pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
      <Route path="*" exact component={Error} />
    </BrowserRouter>
  );
};

export default Router;
