import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Quill from './quill/Index';
// import Quill from '@/components/BraftEditor/Index';
import Info from '../info/Info';
import About from '../about/About';
import Home from '../home/Home';
// import List from './List';

const Index = () => {
  console.log('Index.jsx');
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Home}>
          {
            (props) => (
              <Home {...props} />
            )
          }
          <List />
        </Route> */}
        <Quill />
      </Switch>
    </Router>
  );
};

export default Index;

// export default () => {
//   const [editorState, seteditorState] = useState(initeditorState);
//   const handleChange = useCallback((editorState) => {
//     seteditorState(editorState);
//   }, []);
//   return (
//     <div>
//       <div className="editor-wrapper">
//         <BraftEditor
//           id="editor-1"
//           value={editorState}
//           onChange={handleChange}
//         />
//       </div>
//       <h5>输出内容</h5>
//     </div>
//   );
// };
