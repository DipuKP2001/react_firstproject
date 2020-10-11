import React from 'react'
import Tweet from './Tweet'

function App(){
  return (
    <div className='app'>
      <Tweet name='Jon Snow' message="Hi I'm Targareyn" />
      <Tweet name='Daenerys' message="Hi I'm also Targaeryn" />
      <Tweet name='Lannister' message="Hi I'm a Lannister" />
      <Tweet name='Stark' message="Hi I'm Starkian" />
    </div>
  );
}

export default App;