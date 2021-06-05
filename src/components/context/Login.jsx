import React from 'react';
import LoginContext from './login.context';

const { Consumer } = LoginContext;

export default function Login() {
  return (
    <Consumer>
      {({ login, toLogin, outLogin }) => (
        <div className="login">
          当前Login组件中的 login 状态：
          <span style={{ color: 'red' }}>{login}</span>
          <button type="button" onClick={toLogin}>点击登入</button>
          <button type="button" onClick={outLogin}>点击推出登入</button>
        </div>
      )}
    </Consumer>
  );
}
