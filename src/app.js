import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App'
import TagList from './modules/TagList/containers/TagListContainer';
import TagPage from './modules/TagPage/containers/TagPageContainer';

const app = document.getElementById('container');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute
          component={TagList}
          key="home"
      />
      <Route
          component={TagPage}
          path="/tag(/:tagId)"
          key="home"
      />
    </Route>
  </Router>,
app);
