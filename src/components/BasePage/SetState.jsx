import React from 'react';
import usernameContext from '@/components/username.context';

const { Consumer } = usernameContext;
const { PureComponent } = React;
export default class SetState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 10; i += 1) {
      this.setState((state) => ({
        value: state.value + 1,
      }));
    }
  }

  render() {
    // console.log(this.context);
    return (
      <div className="setS">
        <span />
        <Consumer>
          {(context) => (`this context value is：${context}`)}
        </Consumer>
      </div>
    );
  }
}

SetState.contextType = usernameContext;
