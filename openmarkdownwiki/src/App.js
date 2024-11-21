import React, { useState } from 'react';
import './App.css';
import { Wiki } from './Pages/Wiki'
import { Editor } from './Pages/Editor'


function App() {
  const [activePage, setActivePage] = useState('wiki')

  return (
    <div className="App">
      <Wiki />
      <Editor />
    </div>
  );
}

export default App;
