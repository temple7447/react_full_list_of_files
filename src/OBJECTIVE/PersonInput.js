import React,{Component} from 'react';
import axios from 'axios';


export default class Persons extends Component{
    state = {
      name: ''
    }
    handleChange=(event)=>{
        event.preventDefault()
         this.setState({name:event.target.value})
    }


    handleSubmit=(event)=>{
        event.preventDefault()

        const newUser = {
            name:this.state.name,
        }

    axios.post(`https://jsonplaceholder.typicode.com/users` , {newUser}).then((res)=>{console.log(res); console.log(res.data)})
    .catch(err=>console.log(err))
    }
    
    render() {
        return (
             <form onSubmit={this.handleSubmit}>
                 <label for="name">Person Name</label>
                 <input type="text" name='name' onChange={this.handleChange}/>
                 <button type='submit'>submit</button>
             </form>
        );
    }
}