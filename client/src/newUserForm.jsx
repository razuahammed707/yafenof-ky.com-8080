import './App.css';

function Form(props) {
  return (
    <div className="newUserForm">
      <h1 dir="rtl">לא ניתן להירשם לפעילות ללא ביטוח. זה הזמן למלא את הפרטים....</h1>
        <form onSubmit={props.create}>
            <input type="text" name="fullName" placeholder="שם מלא" required/>
            <input type="text" name="cellPhone" placeholder="סלולרי" required/>
            <input type="text" name="email" placeholder="אימייל" required/>
            <input type="text" name="id" placeholder="תעודת זהות" required/>
            <input type="text" name="address" placeholder="כתובת" required/>
            <label>כתובת</label>
            <input type="date" name="birthDate" placeholder="כתובת" required/>
            <input type="submit" value="להירשם"/>

        </form>
    </div>
  );
}

export default Form;
