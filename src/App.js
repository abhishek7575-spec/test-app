//import logo from './logo.svg';
import './App.css';
import Button from './Button/Button'
import Person from './Person/Person'
import {Component} from 'react'
class App extends Component {
   onclickHandler =  ()=>{
    console.log('button is clicked')
   }
   state={
    data: [
        {name:'abhi',age:'20'},
        {name:'ayush',age:'25'},
        {name:'rik',age:'18'},
        {name:'drishal',age:'20'}
    ],
    show : false
   }
   tooglePerson=()=>
    {
        const statevalue=this.state.show
        this.setState({show:!statevalue})
            
    }
    render() {
       let persons=(<h6>clcik the toogle button first</h6>)
       if(this.state.show===true) {
        persons=(
            <div className="container">
                <Person name={this.state.data[0].name} age={this.state.data[0].age}/>
                <Person name={this.state.data[1].name} age={this.state.data[1].age}/>
                <Person name={this.state.data[2].name} age={this.state.data[2].age}/>
                <Person name={this.state.data[3].name} age={this.state.data[3].age}/>
            </div>
        )
       }
        return (
            <div className="container button1">
                {/* <Button clicked={this.onclickHandler} color="primary" text="toogle-button"></Button> */}
                <button onClick={this.tooglePerson} className="btn btn-primary">tooglePerson</button>
                <div className="container">
                    {persons}
                </div>
            </div>
        )
          
        
    }
}

export default App;
