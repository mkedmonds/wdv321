import React, {Component} from 'react';


class List extends Component{
    

    

    handleChecked (){
        this.setState({
          isChecked: !this.state.isChecked
        });
      }

    render(){

        

        var strikeList = (this.state.isChecked ? console.log("CHECKED") : console.log("UNCHECKED")); 

        return(

            
        );
    }
}

/* const List = props => (
  <ul>
    {
      props.toDoList.map((item, index) => 
      
      <div>
        <input
            type="checkbox"
            onChange={this.props.handleChecked}
            />

            <li key={index}> 
            
                {item}
            </li>
        </div>)
    }
  </ul>
);
 */
export default List;