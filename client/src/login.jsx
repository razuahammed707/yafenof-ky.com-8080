import './App.css';

function Intro() {

  const login=(e)=>{
    e.preventDefault();
    if(e.target.password.value==="123"){
        localStorage.setItem("userAuthenticate",true)
        window.location="/app";
        alert("hello")
    }else{
        alert("Please enter the valid code")
    }
  }
  return (
    <div className="loginForm">
        <form onSubmit={login}>
            <label>Enter the unique  code</label>
            <input type="password" name="password" placeholder="Enter your password"/>
            <input type="submit" value="login"/>
        </form>
    </div>
  );
}

export default Intro;
