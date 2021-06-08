import { Layout } from '@containers/layout';
import { store } from '@store/index';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <Provider store={store}>
      Top Page
      <BrowserRouter>
        <Switch>
          <Route exact component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
