import './App.css';

function Form(props) {
  return (
    <div className="newUserForm">
      <h1 dir="rtl">לא ניתן להירשם לפעילויות שלנו בלי להירשם.
ככה נוכל להיות איתכם בקשר ולעדכן.</h1>
        <form onSubmit={props.create}>
            <input type="text" name="fullName" placeholder="שם מלא" required/>
            <input type="text" name="cellPhone" placeholder="סלולרי" required/>
            <input type="text" name="email" placeholder="אימייל" required/>
            <input type="submit" value="להירשם"/>

        </form>
    </div>
  );
}

export default Form;
