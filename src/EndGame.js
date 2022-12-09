

import React from "react";
import Cookie from 'universal-cookie';
import { useEffect, useState } from "react";
import axios from 'axios'

function EndGame()  {
    console.log('hello');
    var cookie = new Cookie();
    // make this a const so it can't be changed
    const finalTime = cookie.get('playerTime');
    console.log(finalTime)
    const [firstName, setFirstName] = useState('');

    const client = axios.create({
      baseURL: 'https://resonant-petal-370719.uc.r.appspot.com/addscore/' 
    });
    
    const addPosts = () => {
      client
        .post('', {
            user_name: firstName,
            val: finalTime,
        }).then((response) => {
          console.log(response.data, response.code);
       });
      
      }

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); 
        
        // submit info to DB
        addPosts();
        // axios.post('https://resonant-petal-370719.uc.r.appspot.com/addcard/', {user_name:firstName, val:90.8})
        console.log('firstName', firstName);
        console.log(finalTime, typeof finalTime)
        setFirstName('');
    
        
};
   

    //setTimeout(cookie.remove('playerTime', { path: '/' }), 5000)
  return (
      
    <div className="end-game-screen">
        <h3 className = "win-text">Congratulations!</h3>
        <h3 className = "win-text1">You won the memory game in {finalTime} seconds</h3>
        <h3 className = "scoreb-text">Enter your username to submit your time to the scoreboard</h3>

        &nbsp;&nbsp;&nbsp;

  <div class="content">
    <form class="subscription" onSubmit={handleSubmit}>

      <input className="add-email" id="first_name" type="text" placeholder="Username" onChange={event => setFirstName(event.target.value)}
          value={firstName}
           /> 
      <button className="submit-email" type="submit">
        <span class="before-submit">Submit</span>
        <span class="after-submit">Your time has been submitted!</span>
       </button>
    </form >
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button-38" role="button" onClick={event => window.location.reload()} >Play Again </button>
        &nbsp;&nbsp;&nbsp;
        <button className="button-38" role="button1" onClick={event => window.location.reload()}>Scoreboard </button>

    </div>  );
}

export default EndGame;