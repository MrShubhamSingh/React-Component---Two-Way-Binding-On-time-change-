import React, { Component } from 'react';
import shubhamClass from'./App.css';
import Persons from '../allComponent/Persons';
import shubhamClass3 from '../allComponent/components/block.css';
import Cockpit from '../allComponent/Cockpit/Cockpit.js'

class App extends Component{
  state={
    persons:[
      {id:'1xs',name:"Shubham",age:"22"},
      {id:'2as',name:"Rajan",age:"32"},
      {id:'3hg',name:"Max",age:"22"}
    ],
    showContent : false,
   
  }
  
  deleteHandler=(personIndex)=>{
    // const deleteIt = this.state.persons.slice();
    const deleteIt=[...this.state.persons];
    deleteIt.splice(personIndex,1);
    this.setState({persons:deleteIt});
  }

  inputHandler=(event,id)=>{
      const personIndex = this.state.persons.findIndex(p=>{
       return  p.id===id;
      });

      const personsObject = {
        ...this.state.persons[personIndex]
      };
      personsObject.name = event.target.value;
      const personsCopy = [...this.state.persons];
      personsCopy[personIndex]=personsObject;

    this.setState({persons:personsCopy});
  }

  switchHandler=(newName)=>{
  
    this.setState({
        persons:[
          {name:newName,age:"22"},
          {name:"Akhilesh",age:"32"},
          {name:"Max",age:"22"}
        ]
       })}

  appearHandler = (event)=>{
    const visibility = this.state.showContent;
    this.setState({showContent: !visibility}); 
  }

  render(){
 
    let visible = null;
    if(this.state.showContent)
    {
      visible = (
        <div>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deleteHandler}
          changed = {this.inputHandler}
          />
          <button  onClick={this.switchHandler.bind(this, '-Enter new name-')} className={shubhamClass3.Red}  >Change name</button>
        </div>
        ); 
    }
    return(
                                                           
      <div className={shubhamClass.App}>
      <Cockpit
          showContent={this.state.showContent}
          persons={this.state.persons}
          clicked={this.appearHandler}
      />
      {visible}
      </div>
    
       );
  }
}

export default App;