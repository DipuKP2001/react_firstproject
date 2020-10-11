import React from 'react';
import './App.css'

function Tweet(props){
    const {name,message} = props 
    return (
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>No. of likes</h3>
        </div>
    );
}

export default Tweet;