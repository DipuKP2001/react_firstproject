import React, {useState} from 'react'
import Tweet from './Tweet'

function App(){

  const [users, SetUsers] = useState([
    {name:'Dev Ed',message:"Hi I'm Dev Ed"},
    {name:'Jon Snow',message:"Hi I'm Jon Snow"},
    {name:'Dennis Ivy',message:"Hi I'm Dennis Ivy"},
  ]);

  return (
    <div className='app'>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;