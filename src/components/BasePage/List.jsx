import React from 'react';
import usernameContext from '@/components/username.context';
import data from './list.json';

const { Consumer } = usernameContext;

const { list } = data;
export default function List() {
  return (
    <div className="list">
      { list.map((item) => <li key={item.id}>{ item.title }</li>) }
      <Consumer>
        {(context) => (`this context value is：${context}`)}
      </Consumer>
    </div>
  );
}

// List.contextType = usernameContext;
//  函数式组件不支持 static 静态属性的 contextType
