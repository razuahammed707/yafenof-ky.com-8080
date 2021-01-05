import './App.css';

function Form(props) {
  return (
    <form onSubmit={props.create}>
        <input type="text" name="userName"placeholder="שם המתנדב" required/>
        <input type="text" name ="cellPhone"placeholder="מספר סלולרי" required/>
        <br/>
        <p>בחר/י את המשמרת להתנדב בה</p>
        <br/>
        <div className="dates">
            <div className="item">
                <p>14.1.21</p>
                <input type="radio" value="14.1.21" name="date"/>
            </div>
            <div className="item">
                <p>10.1.21</p>
                <input type="radio" value="10.1.21" name="date"/>
            </div>
            <div className="item">
                <p>7.1.21</p>
                <input type="radio" value="7.1.21" name="date" />
            </div>
            <div className="item">
                <p>4.1.21</p>
                <input type="radio" value="4.1.21" name="date" />
            </div>
            <div className="item">
                <p>1.1.21</p>
                <input type="radio" value="1.1.21" name="date" />
            </div>
            <div className="item">
                <p>17.1.21</p>
                <input type="radio" value="17.1.21" name="date" />
            </div>
            <div className="item">
                <p>11.1.21</p>
                <input type="radio" value="11.1.21" name="date" />
            </div>
            <div className="item">
                <p>8.1.21</p>
                <input type="radio" value="8.1.21" name="date" />
            </div>
            <div className="item">
                <p>5.1.21</p>
                <input type="radio" value="5.1.21" name="date" />
            </div>
            <div className="item">
                <p>2.1.21</p>
                <input type="radio" value="2.1.21" name="date" />
            </div>
            <div className="item">
                <p>19.1.21</p>
                <input type="radio" value="19.1.21" name="date" />
            </div>
            <div className="item">
                <p>13.1.21</p>
                <input type="radio" value="13.1.21" name="date" />
            </div>
            <div className="item">
                <p>9.1.21</p>
                <input type="radio" value="9.1.21" name="date"  />
            </div>
            <div className="item">
                <p>6.1.21</p>
                <input type="radio" value="6.1.21" name="date"  />
            </div>
            <div className="item">
                <p>3.1.21</p>
                <input type="radio" value="3.1.21"  />
            </div>
        </div>

        <input type="submit" value="הירשם" className="submitBtn"/>

    </form>
  );
}

export default Form;
