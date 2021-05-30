import React, { useState } from 'react';

import Index from './pages/VirtualList';
// import Index from './pages/VirtualListAyHeight/Index';
// import Index from '@/pages/Antd/Index.jsx';
// import Index from '@/pages/WirelessRolling/Index.jsx';
// import Index from '@/components/AsyncLoad/ImageAsyncLoad.jsx';
import 'antd/dist/antd.css';

function App() {
  const [state, setstate] = useState(true);
  return (
    <>

      {
        state ? (
          <div className="App">
            <Index />
            <button
              type="button"
              onClick={() => {
                setstate(false);
              }}
            >
              点击切换显示
            </button>
          </div>
        ) : (
          <div className="close" style={{ height: '200vh' }}>关闭了</div>
        )
      }
    </>
  );
}

export default App;
