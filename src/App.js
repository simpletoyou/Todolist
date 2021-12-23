/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2021-12-23 11:58:45
 * @LastEditors: simpletoyou
 * @LastEditTime: 2021-12-23 14:22:00
 */
import React, { useState } from 'react';
import './App.css';
import Test from './components/Test';

function App() {

  const [ title, setTitle] = useState('This is test title')

  function changeTitle(title) {
    setTitle(title)
  }
  
  return (
    <div className="App">
      <Test title={title} changeTitle={changeTitle}></Test>
    </div>
  );
}

export default App;
