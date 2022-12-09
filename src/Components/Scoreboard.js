import './Admin.css';
import axios from 'axios'
import { useEffect, useState } from "react";


function Admin() {
  const [state, setState]= useState(0)
  const [posts, setPosts] = useState([]);

  const client = axios.create({
    baseURL: 'https://resonant-petal-370719.uc.r.appspot.com/scores/' 
  });
  
  useEffect(() => {
    client.get('?_limit=5').then((response) => {
       setPosts(response.data);
    });
  }, []);
  

  return (
    <div className="App">
      <h1>Scoreboard</h1>

    <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Time</th>



            </tr>

            {posts.map((post) => {
       return (
        <tr className="post-card">
          <td>
          <p className="post-title">{post.user_name}</p></td>
          <td><p className="post-body">{post.val}</p></td>

        </tr>
          );
        })}

          </thead>
          
        </table>
    </div></div>
  );
}
export default Admin;