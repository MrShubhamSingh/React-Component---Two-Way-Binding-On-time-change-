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
       })

    
  }

  appearHandler = (event)=>{
   
    const visibility = this.state.showContent;
    this.setState({showContent: !visibility}); 
  }

  render(){
    // const styleByMe = {
    //   backgroundColor:'cyan',
    //   border:'1px solid blue',
    //   font:'inherit',
    //   fontWeight:"bold",
    //   padding:'10px',
    //   cursor:'pointer',
    //   boxShadow: '5px 6px 5px rgb(224, 201, 201)',
    //   color:'black'
    // };
 

    let visible = null;
    // let btnClass = null;
    if(this.state.showContent)
    {
      visible = (
        <div>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deleteHandler}
          changed = {this.inputHandler}
          />

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                   */}

           {/* {this.state.persons.map((x,index)=>
           {
             return  <Person 
             click = {()=> this.deleteHandler(index)} 
             name={x.name} 
             age={x.age} 
             key={x.id} 
             changed={(event)=>this.inputHandler(event,x.id)}/>                        
           })} */}

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                   */}
        {/* <Person name = {this.state.persons[0].name}
                age={this.state.persons[0].age}
                changed={this.inputHandler}
               
                />
                
        <Person name = {this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.inputHandler}
                />
        <Person nbtnClass = shubhamClass.Red;ame = {this.state.persons[2].name}
                age={this.state.persons[2].age}
                changed={this.inputHandler}
                /> */}
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                   */}
            
      <div  className={shubhamClass3.block}>
         <button  onClick={this.switchHandler.bind(this, '-Enter new name-')} className={shubhamClass3.Red}  >Change name</button>
      </div>
         </div>
         
      );
      // styleByMe.backgroundColor="rgb(255, 94, 0)";
      // styleByMe.boxShadow="5px 6px 5px rgb(255, 169, 89";
      // btnClass = shubhamClass.Red;
    }

  //  const myStyleClass = [];
  //  if(this.state.persons.length<=3)
  //  {
  //    myStyleClass.push([shubhamClass.fontClr, shubhamClass.normal].join(' '));
  //  }

  //  if(this.state.persons.length<=2)
  //  {
  //    myStyleClass.push([shubhamClass.fontClr, shubhamClass.bold].join(' '));
  //  }


    return(
      
      <div className={shubhamClass.App}>
      {/* <h3 className={myStyleClass}>Welcome</h3>
      <div className={shubhamClass3.block}>
        <button className={btnClass} onClick={this.appearHandler}>On/Off</button>
      </div> */}
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