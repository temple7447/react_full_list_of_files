import React,{Component} from 'react';
import axios from 'axios'


export default class Persons extends Component{
    state = {
        persons:[]
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            console.log(res.data)
            this.setState({persons:res.data})
        })
    }
    render() {
        return (
             <ul>
                 {this.state.persons.map((person)=>{
                const {id,name} = person ;
                
                  return <li key={id}>{name}</li>
                 })}
             </ul>
        );
    }
}