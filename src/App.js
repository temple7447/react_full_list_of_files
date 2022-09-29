// import React, {useState,useEffect} from "react";
import React from 'react';
import Persons from './OBJECTIVE/Person';
import PersonInput from './OBJECTIVE/PersonInput'
import './App.css';
// import Header from "./component/Header";
// import AddContact from './component/AddContact';
// import ContactList from './component/ContactList';




function App() {
  // const [Data,setData] = useState([])

  // const Datas=[{
  //   "username":"Temple",
  //   "message":"you are welcome to auchipoly for the first of this year"
//   // }]
//   const localkey = 'Data';

// const addcontacthandle = (data)=>{
//   // console.log(data)
//   setData(...Data, data)
// }
// useEffect(()=>{
// localStorage.setItem(localkey,JSON.stringify(Data))
// },[Data])

//   return (
//     <div>
// <Header />



// <div className="container">

// <AddContact addprops={addcontacthandle} />
// <ContactList datas={Data}/>

return (

<div>
  <PersonInput />
<Persons />







  



    </div>
  );
}

export default App;
