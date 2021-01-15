import './App.css';

function Form(props) {
    console.log(props)
  return (
    <div className="mainForm">
        <form onSubmit={props.create}>
        <input type="text" name="userName"placeholder="שם המתנדב" required/>
        <input type="text" name ="cellPhone"placeholder="מספר סלולרי" required/>
        <br/>
        <p>בחר/י את המשמרת להתנדב בה</p>
        <br/>
        <div className="dates">
            
           {(props.dates.map(item=>{return(<div className="item">
                 <input type="radio" value={item.date} name="date"/>
                <p>{item.date}</p>
            </div>)}))}
        </div>

        <input type="submit" value="הירשם" className="submitBtn"/>

    </form>
    </div>
  );
}

export default Form;
