import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import React from 'react';
import BraftEditor from 'braft-editor';
import Table from 'braft-extensions/dist/table';

const options = {
  defaultColumns: 3, // 默认列数
  defaultRows: 3, // 默认行数
  withDropdown: false, // 插入表格前是否弹出下拉菜单
  columnResizable: false, // 是否允许拖动调整列宽，默认false
  exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
};

BraftEditor.use(Table({
  includeEditors: ['editor-1'],
}));

export default class BasicDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>', { editorId: 'editor-1' }), // 设置编辑器初始内容
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editorState) {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState, outputHTML } = this.state;
    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            id="editor-1"
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <h5>输出内容</h5>
        {/* <div className="output-content">{outputHTML}</div> */}
      </div>
    );
  }
}
