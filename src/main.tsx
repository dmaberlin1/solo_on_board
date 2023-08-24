import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "@/redux/store/store.tsx";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
);
