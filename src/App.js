import React from 'react';
import {comments} from './commentData';
import Card from './Card';
import './App.css';

function App() {
  return (
    comments.map(comment => 
      <div className="App">
        <Card commentObject={comment} />
      </div>)
  );
}

export default App;
