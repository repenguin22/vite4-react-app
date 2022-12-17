import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>count up</button>
    </div>
  );
}

export default App;
