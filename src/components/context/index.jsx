import React, { PureComponent } from 'react';
import LoginContext from './login.context';
import Login from './Login';

const { Provider } = LoginContext;
export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: 'login',
      outLogin: this.outLogin.bind(this),
      toLogin: this.toLogin.bind(this),
    };
  }

  outLogin() {
    this.setState({
      login: 'outLogin',
    });
  }

  toLogin() {
    this.setState({
      login: 'login',
    });
  }

  render() {
    return (
      <Provider value={{
        login: this.state.login,
        outLogin: this.state.outLogin,
        toLogin: this.state.toLogin,
      }}
      >
        <div className="index-page">
          <div className="index-context">
            在Index组件里，login登入状态为：
            <span style={{ color: 'red' }}>{this.state.login}</span>
            下面一行是login登入组件：
          </div>
          <Login />
        </div>
      </Provider>
    );
  }
}
