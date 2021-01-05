import React,{useState,useEffect, Fragment} from "react"
import './App.css';
import Intro from "./intro" 
import RegForm from "./form"
import axios from "axios"
import Table from "./table"

function App() {
  const [userData,setData]=useState([]);
  const [isLoading,setLoading]=useState(true);


  const loadData=async()=>{
    setLoading(true)
    let user = await axios.post("/all");
    setData(user.data.body)
    console.log(user.data.body)
    setLoading(false)

  }

  useEffect(()=>{
    loadData()
  },[])
  const createUser=async(e)=>{
    e.preventDefault();
   
    let data={
      userName:e.target.userName.value,
      cellPhone:e.target.cellPhone.value,
      date:e.target.date.value,

    }
    let user = await axios.post("/",{...data});
    alert(user.data.message)
    if(user.data.status===true){
      loadData()
    }
  }

  return (<Fragment>
    <div className="App">
        <Intro/>
        <RegForm create={createUser}/>
    </div>
    <br/>
    <div className="App">
      {(isLoading===true?<p>...Loading</p>:<Table userDetails={userData}/>)}
    </div>
        
  </Fragment> 
  )}

export default App;
