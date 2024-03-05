import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from './components/views/navbar/navbar';
import CommonLayout from './components/views/layout/layout';

import MyPage from './components/views/layout/testing-page';
import LoginView from './components/views/login/login-view';
import LoginPage from './pages/login/login-page';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

       
      {/* <NavigationBar /> */}
      {/* <CommonLayout /> */}
      {/* <MyPage /> */}
      {/* <Route path="/loginView" element={<LoginView />} /> */}
      <Route path="/login" element={<LoginPage />} />

      {/* <div className="App"> */}
        {/* <LoginView/> */}
      {/* </div> */}


      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
