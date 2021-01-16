import './App.css';

function Intro() {

  const login=(e)=>{
    e.preventDefault();
    if(e.target.password.value==="myn@2021"){
        localStorage.setItem("userAuthenticate",true)
        window.location="/app";
    }else{
        alert("לפני שנכנסים - סיסמא")
    }
  }
  return (
    <div className="loginForm">
        <form onSubmit={login}>
            <label>לפני שנכנסים - סיסמא</label>
            <input type="password" name="password" placeholder="סיסמא"/>
            <input type="submit" value="כניסה למערכת"/>
        </form>
    </div>
  );
}

export default Intro;
