import React from 'react';
import './App.css';
import {Navigate, Route, Router, Routes} from "react-router-dom";
import { Login } from './login/Login';
import {Registration} from "./registration/Registration";
import {ProFile} from "./proFile/ProFile";
import Error404 from "./404/Error404";
import {PasswordRecovery} from "./Password/passwordRecovery/PasswordRecovery";
import {NewPassword} from "./Password/newPassword/NewPassword";
import TestPage from './testPage/TestPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/profile" element={<ProFile/>}/>
          <Route path="/404" element={<Error404/>}/>
          <Route path="password_recovery" element={<PasswordRecovery/>}/>
          <Route path="new_password" element={<NewPassword/>}/>
          <Route path="/testPage" element={<TestPage/>}/>
          {/*<Route path="*" element={<Navigate to= "/404"/>}/>*/}
      </Routes>
    </div>
  );
}

export default App;
