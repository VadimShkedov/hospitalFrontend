import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router.jsx';
import GlobalStyle from "./globalStyles";
import { Provider } from 'react-redux';
import {store} from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router()} />
    </Provider>
  </React.StrictMode>,
)
