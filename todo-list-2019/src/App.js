import React from 'react';
import './App.css';


class App extends React.Component {

  setCurrentToDoItem = (toDoItem) => {
    console.log("toDoItem", toDoItem);
    this.setState({
      currentToDoItem: toDoItem
    });
  };

  saveToDoListItem = (toDoItem) => {
    this.setState({
      toDoList:[
        ...this.state.toDoList,
        toDoItem
      ]
    });
  };

  constructor(props){
    super(props);

    this.state = {
      currentToDoItem:null,
      isChecked:false,
      toDoList: []
    };
    this.handleChecked = this.handleChecked.bind(this)
  }
   handleChecked (){
    this.setState({
      isChecked: !this.state.isChecked
    });
  } 

  render(){

    var strikeList = (this.state.isChecked ? "crossOut" : "button"); 
    
    return (
      <div>

        <header>
          <h1>To Do List</h1>
        </header>


        <div className="container">

          <div className="label">
            <label>To-Do Item: </label>
          </div>

          <div className="center">
            <input
              className="textBox"
              onChange={(event)=> this.setCurrentToDoItem(event.target.value)}      
            ></input>
          </div>

          <div className="center">
            <button
              className="addItem"
              onClick = {() => this.saveToDoListItem(this.state.currentToDoItem)}  
            >
              Add Item
            </button>
          </div>

          <p className="current">Current To-Do Item: {this.state.currentToDoItem}</p>

          <div>
            <p className="todoList">To-Do List</p>

            <div>

                  {
                      this.state.toDoList.map((item, index) => 
          
                      <div key={index} className="listItems">
          
                          <p className={strikeList}>

                              <input
                                type="checkbox"
                                onChange={this.handleChecked}
                              />

                              {item}          
                              
                          </p>
                          
                          
          
                      </div>
                      )
                  }
              </div>
            
          </div>

        </div>

      </div>
    );
  }
}



export default App;

/* 
  ToDo List
    input type text
    show todo items


*/