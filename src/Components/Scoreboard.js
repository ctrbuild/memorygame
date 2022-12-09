import { useState } from 'react'
import './Admin.css';


function Admin() {
  const [state, setState]= useState(0)
  return (
    <div className="App">
      <h1>Scoreboard</h1>

    <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Time</th>

            </tr>
          </thead>
          
        </table>
    </div></div>
  );
}
export default Admin;