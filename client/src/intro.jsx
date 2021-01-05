import './App.css';

function Intro() {
  return (
    <div>
        <p>בקובץ יש את המשמרות שאנחנו רוצים לבצע. יחד עם זאת משמרות שלא יתמלאו ב-2 מתנדבים לא יוכלו להתקיים.תהליך הרישום:</p>
        <p>1. הטופס מאפשר ל-2 מתנדבים לבחור את אותו התאריך</p>
        <p>2. על כל מתנדב/ת לבחור משמרת אחת מבין המשמרות שמופיעות בטופס.</p>
        <p>3. אחרי ש-2 מתנדבים יבחרו את אותו התאריך, התאריך ייגרע מהטופס - ישארו רק המשמרות הפנויות</p>
        <p>4. בחלק התחתון של הטופס מופיעים המשמרות הקיימות ושמות המתנדבים שכבר נרשמו אליהם.</p>
        <br/>
        <p>ב-20.1.21 אנחנו נראה לאיזה משמרות יש רק רישום של מתנדב אחד וננסה לסגור גם אותם.</p>
        <p>ב-27.1.21 אנחנו נפיץ פה בקבוצה את המשמרות לחודש ינואר.</p>
        <p>חודש פעילות מוצלח</p>
    </div>
  );
}

export default Intro;