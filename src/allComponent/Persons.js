import React from 'react';
import Person from './components/component1';

const persons = (props) => props.persons.map((x,index)=>
    {
      return  <Person 
      click = {()=> props.clicked(index)} 
      name={x.name} 
      age={x.age} 
      key={x.id} 
      change={(event)=>props.changed(event,x.id)}/>                        
    })
export default persons;