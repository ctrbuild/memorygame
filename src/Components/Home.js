import { useState } from 'react'
import Cards from './Cards'
import Timer from './Timer'

function App() {
  const [state, setState]= useState(0)
  return (
    <div className="App">
      <h1>Google Cloud Products</h1>
      <Timer />
      <Cards />
    </div>
  );
}
export default App;