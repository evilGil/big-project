import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState('');

  const onGetMessageClick = () => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data));
  }

  const onGetItemsClick = async () => {
    const res = await fetch('http://localhost:5000/item');
    const data = await res.text();
    setItems(data);
  }

  return (
    <div>
      <div>
        <button onClick={onGetMessageClick}>send message2</button>
        {message}
      </div>
      <div>
        <button onClick={onGetItemsClick}>get items</button>
        {items}
      </div>
    </div>
  );
}

export default App;
