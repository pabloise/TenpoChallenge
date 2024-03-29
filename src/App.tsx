import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {MainNavigation} from './screens';
import './api';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
