"use client";



export default function profile({}) {

    

    async function showProfile(user){
    let headersList = {
        "Accept": "*/*",
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY"
       }
       
       let response = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/quizAnswers?name=eq.Julius", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       
data.filter((item) => item.name === "Julius")
console.log("Det her er dataen til mig", data);
    }




  return (


<section>
<label htmlFor="name">
Name
<input name="userName" id="name" type="text" />
</label>
<button onClick={showProfile}>Klick mig </button>
</section>


  );
}
