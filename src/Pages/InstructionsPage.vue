<template>
  <div>
    <br>
    <div class="par">
      ,שלום רב
      <br>
    .ברוכים הבאים למשחק העדפת תמונות
    <br>
    .המשחק נערך במסגרת פרויקט גמר שמתבצע במחלקה להנדסת תכנה ומערכות מידע
    <br><br>
    :המשחק מחולק לשני שלבים
    <br><br>
    בשלב הראשון, עליכם לצפות ב-72 תמונות לפחות ולתת להן ציון שמבטא עד כמה אתם אוהבים את התמונה. שלב זה נמשך כ- 10 דקות. חשוב שתתנו ציונים 
    <br>
    .המשקפים את העדפותיכם כי הצלחתכם במשחק תלויה בכך שבהמשך תצליחו לזהות אילו תמונות אהבתם יותר ואילו תמונות אהבתם פחות
    <br>
    בשלב השני, אתם מוזמנים לשחק במשחק:  בפניכם יוצג מסך שבו 8 תמונות מתוך התמונות שראיתם בשלב הראשון. האתגר הוא לבחור מבין התמונות האלו 
    <br>
    .את שתי התמונות להן נתתם את הציונים הגבוהים ביותר בשלב הראשון. על כל בחירה נכונה תזכו בנקודה. כל משחק כולל ארבעה מסכים כאלו
    <br><br>
    !מטרת המשחק היא לצבור כמה שיותר נקודות. אנא התאמצו ככל האפשר כדי שתהיה לנו תחרות מעניינת
    <br>
    .אתם מוזמנים לשחק במשחק פעם אחת בכל יום, במהלך כל התקופה בה יהיה המשחק זמין. לא ניתן לשחק במשחק יותר מפעם ביום
    <br>
    כדי לאפשר משחק בהתאם לכללים, וכדי לאפשר קשר אתכם במהלך תקופת המשחק, נבקשכם לציין כתובת של דואר אלקטרוני באמצעותה נוכל לשלוח לכם 
    <br>
    הודעות (למשל, תזכורת במידה ועברו כמה ימים מאז שיחקתם לאחרונה). מעבר לכך, אין צורך באמצעי הזדהות כלשהו. אם תרצו, אתם יכולים לבחור לעצמכם 
    <br>
    .כינוי שיאפשר לכם לזהות את עצמכם בטבלת השחקנים המצטיינים 
    <br><br>
    :אנו מתחייבים
    <br><br>
    לעדכן אתכם לגבי ההישג שלכם במשחק עם סיום תקופת המשחק - 
    <br>
    .שכל הנתונים על המשחק ישמרו על מחשב מאובטח וישמשו אך ורק לניתוחים סטטיסטיים. בשום אופן לא יפורסמו נתונים אישיים לגביכם -
    <br><br>
    <label for="checkboxG1" class="select-label" style="margin-right: 4px">אני מסכימ/ה לתנאים לעיל</label>
    <input type="checkbox" id="checkboxG1" class="css-checkbox" v-model="checkSelect" />
    </div>
    <div class="d-flex justify-content-center">
      <br>
      <button type="button" class="btn btn-outline-danger" v-on:click="submit">
       המשך      </button>
    </div>
    <br>
  </div>
</template>

<script>

export default {
  name: "InstructionsPage",
  date() {
    return {
      checkSelect: false
    }
  },
  components: {
  },
  methods: {
      submit(){
        if (this.checkSelect == true)
        {
          this.$root.store.setAgree();
          this.$router.push("Register");
        }
        else
        {
          alert("You must confirm the terms and conditions")
        }
      }
  },
  created() {},
};
</script>
<style scoped>
.par{
 text-align: right;
 font-family: Calibri;
 /* margin-right: 5%;  */
 margin: 0 auto;
 margin-bottom: 10px;
 width: 60%;
 border: 5xp;
 border-style: groove;
 /* margin: auto; */
/* width: 60%; */
/* border: 5px solid #FFFF00; */
padding: 10px;
 
}
</style>
