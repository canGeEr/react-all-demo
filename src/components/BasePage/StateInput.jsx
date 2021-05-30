import React from 'react';
import usernameContext from '@/components/username.context';

const { Consumer } = usernameContext;

const { PureComponent } = React;
export default class StateInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: 'zix',
      email: '2020974511@qq.com',
    };
    this.vmodel = this.vmodel.bind(this);
  }

  vmodel({ target }) {
    // console.log(target);
    const { title, value } = target;
    this.setState({
      [title]: value,
    });
  }

  render() {
    // console.log('表单组件');
    return (
      <div>
        <input type="text" title="username" value={this.state.username} onChange={this.vmodel} />
        <input type="text" title="email" value={this.state.email} onChange={this.vmodel} />
        <p>
          {`
          username: ${this.state.username} \n
          email: ${this.state.email}
        ` }

        </p>
        <Consumer>
          {(context) => (`this context value is：${context}`)}
        </Consumer>
      </div>
    );
  }
}
