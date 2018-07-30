import React from 'react';
import shubhamClass from './Cockpit.css';
import shubhamClass3 from '../components/block.css';

const cockpit = (props) => {
    
    const myStyleClass = [];
    let btnClass = null;
    if(props.showContent)
    {
        btnClass = shubhamClass.Red;
    }
    if(props.persons.length<=3)
    {
      myStyleClass.push([shubhamClass.fontClr, shubhamClass.normal].join(' '));
    }
 
    if(props.persons.length<=2)
    {
      myStyleClass.push([shubhamClass.fontClr, shubhamClass.bold].join(' '));
    }

    return(
        <div className={shubhamClass.Cockpit}>
        <h3 className={myStyleClass}>Welcome</h3>
        <div className={shubhamClass3.block}>
          <button className={btnClass} onClick={props.clicked}>On/Off</button>
        </div>
        </div> 
    );
}

export default cockpit;