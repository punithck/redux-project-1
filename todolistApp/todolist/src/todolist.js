import React,{Component} from "react"
import ToDoItems from "./todoitems"
import "./todolist.css"
import FlipMove from "react-flip-move"

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.addItem=this.addItem.bind(this)
        this.state={
            items:[]
        }
    }
    addItem(e){
        e.preventDefault()
        if(this._inputElement.value !==""){
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(newItem)
                }
            })
        }

        
        console.log(this.state.items)
        this._inputElement.value=" "

    }
    deleteItem(key)
    {
        var filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });
      this.setState({
        items: filteredItems
      });
            console.log(this.state.items)
        
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement=a}
                    placeholder="enter task" ></input>
                    <button type="submit">add</button>
                </form>
                </div>
               
                <FlipMove  duration={1000} easing="ease-out">
                <ToDoItems entries={this.state.items}
                delete={this.deleteItem.bind(this)}/>
                </FlipMove>
            </div>
        );
    }
}
export default ToDoList