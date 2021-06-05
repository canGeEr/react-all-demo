import React from 'react';
import { List } from 'react-virtualized';
import faker from 'faker';

let count = -1;
const list = (new Array(1000).fill(0)).map(() => {
  count += 1;
  return ({
    title: faker.lorem.sentences(),
    id: count,
  });
});

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  console.log(style, key);
  return (
    <div key={key} style={style}>
      {list[index].title}
    </div>
  );
}

export default () => (
  <List
    className="sdads"
    autoHeight={false}
    width={window.screen.width - 16}
    height={300}
    rowCount={list.length}
    rowHeight={50} // 默认高度
    rowRenderer={rowRenderer}
  >
    就这
  </List>
);
