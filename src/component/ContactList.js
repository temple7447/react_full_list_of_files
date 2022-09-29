import React from 'react';
import ContactCard from './ContactCard';


function ContactList(props) {
   const {datas} = props;
const listofdata = datas.map((data)=>{
    const {username,message,}= data;
    return (<div>
       <ContactCard name={username}  message={message}/>
    </div>)
})


    return ( 
       <>
         {/* <ima className=" bg-green h-25 w-25" src={user} alt="image logo"/> */}
        <h1>{listofdata}</h1>
      
        </>
     );
}

export default ContactList;