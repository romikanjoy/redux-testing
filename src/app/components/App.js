import React from 'react';
import MessageList from './MessageList';

const App = (props) => {
  return (
    <div>
      <h3 className="display-3">Messages</h3>
      <MessageList />
    </div>
  );
};

export default App;
