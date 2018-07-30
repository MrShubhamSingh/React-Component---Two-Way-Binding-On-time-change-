import React from 'react';
import shubhamClass2 from './block.css';

const person = (props) => {
    return(
        <div className={shubhamClass2.block} >
            <h3>Hello I'm {props.name}</h3>
            <h3 onClick={props.click} >and I'm {props.age} years old</h3>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;