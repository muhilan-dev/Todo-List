// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
import React, { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    // preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <div className='container'>
      <div className='box'>
      <h1 >Todo List</h1>
      <div className='inp'>
      <input
        type="text"
        value={inputValue}
        placeholder='Type Here'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='button' onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button class="delete-button" aria-label="Delete" onClick={() => deleteItem(index)}><span class="icon">&times;</span></button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;
