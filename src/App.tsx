import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginView from './components/views/login/login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPasswordView from './components/views/login/forgot-password';
import CreatePasswordView from './components/views/login/create-password';
import ForgotSuccessMsgView from './components/views/login/forgot-success-msg';
import Dashboard from './components/views/login/dashboard';
import LoginPage from './components/views/login/loginpage';




// npm install react-router-dom
// npm install --save react-router-dom @types/react-router-dom - imp
// npm i @reduxjs/toolkit react-redux react-router-dom

// npm install axios

// npm i @ant-design/icons
// npm install @fortawesome/fontawesome-free
// npm install react-intl
// npm install --save-dev @types/react-intl
// npm install miragejs @types/miragejs --save-dev
// npm i miragejs
//dragdrop, table top
// npm install antd react-dnd react-dnd-html5-backend
// npm install js-cookie
// npm install @types/js-cookie
//npm i --save-dev @types/js-cookie


// npm install jwt-decode
//npm install @types/jwt-decode --save-dev
// npm i jsonwebtoken
// npm i --save-dev @types/jsonwebtoken
//  npm install buffer
// npm install crypto-browserify stream-browserify util
// npm install --save-dev jest @testing-library/react @testing-library/dom
// npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest


//npm install --save-dev @swc/jest @types/jest jest jest-css-modules jest-environment-jsdom
//npm install redux-mock-store --save-dev              - use @types/
//npm install --save-dev jest ts-jest @types/jest

function App() {
  return (
    <Provider store={store}>
      {/* <NavigationBar /> */}
      {/* <CommonLayout /> */}
      {/* <MyPage /> */}
      {/* <div className="App"> */}
        {/* <LoginView/> */}
      {/* </div> */}
      <BrowserRouter>
        <Routes>

      <Route path="/login" element={<LoginView />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordView/>} />
      <Route path="/create-password" element={<CreatePasswordView/>} />
      <Route path="/success-msg" element={<ForgotSuccessMsgView/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
