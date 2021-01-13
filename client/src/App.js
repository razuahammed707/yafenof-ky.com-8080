import React,{useState,useEffect, Fragment} from "react"
import './App.css';
import Intro from "./intro" 
import RegForm from "./form"
import axios from "axios"
import Table from "./table"
import NewForm from "./newUserForm"

function App() {
  const [userData,setData]=useState([]);
  const [isLoading,setLoading]=useState(true);
  const [form,setForm]=useState(true);

  const loadData=async()=>{
    setLoading(true)
    let user = await axios.post("/all");
    setData(user.data.body)
    console.log(user.data.body)
    setLoading(false)

  };

  const newUserData=async(e)=>{
    e.preventDefault();
    let data={
      fullName:e.target.fullName.value,
      cellPhone:e.target.cellPhone.value,
      email:e.target.email.value,
      id:e.target.id.value,
      address:e.target.address.value,
      birthDate:e.target.birthDate.value,
    }
    let user=await axios.post("/newUser",data);
    // alert("Account Created");
    alert("תודה שנרשמת. עכשיו נחזור לדף הראשון כדי להשלים את הרישום");
    setForm(true)

  }

  useEffect(()=>{
    loadData()
  },[]);

  const createUser=async(e)=>{
    e.preventDefault();
   
    let data={
      userName:e.target.userName.value,
      cellPhone:e.target.cellPhone.value,
      date:e.target.date.value,

    }
    let user = await axios.post("/",{...data});
    alert(user.data.message);

    if(user.data.code==="newUser"){
      setForm(false)
    }
    if(user.data.status===true){
      loadData()
    }
  }

  if(form){
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
    )
  }else{
    return(<NewForm create={newUserData}/>)
  }

  }

export default App;
