/**
 * Created by rashad on 12/9/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ItemsPage from './components/items/ItemsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="items" component={ItemsPage}/>
  </Route>
);
