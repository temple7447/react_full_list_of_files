import React from 'react';


class AddContact extends React.Component {
    state = { username:'',
message:''  } ;

   add = (e)=>{
       e.preventDefault()
    //    const {username,message} = this.state;
       if(this.state.username === "" || this.state.message=== ''){
           alert("all field must be inputted")
           return;
       }else{
        this.props.addprops(this.state)
           this.setState({username:"",message:""})
        

      
       }

 }

    render() { 
        return (
            <section>
                <h1 className='text-center text-black'>AddContact</h1>
                <form className="mt-3 mx-auto bg-blue w-50" onSubmit={this.add}>
                    <div>
                    <label for="name">USERNAME</label>
                    <input type='text' name="username" placeholder='Enter username....' className='form-control' onChange={(e)=>{
                        // const {username} = e.target.value;
                      return  this.setState({username:e.target.value})}} value ={this.state.username}/>
                    </div>
                    <div className='mb-3'>
                    <label for="name">Message</label>
                    <input type='text' placeholder='Enter message....' name="message" className='form-control'  onChange={(e)=>{
                        // const {message} = e.target.value;
                        return this.setState({message:e.target.value})}} value ={this.state.message}/>
                    </div>
                    <div >
                    <button type='submit' name="username" className='form-control  justify-content-center align-item-center  btn btn-primary'>SUBMIT</button>
                    </div>
                </form>
            </section>
        );
    }
}
 
export default AddContact;