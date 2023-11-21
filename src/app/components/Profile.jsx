"use client";
import React, { useState } from "react";


export default function profile() {

    const [myProfileName, setmyProfileName] = useState();
    const [myprofile, setmyProfile] = useState();

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

var myProfileData = data[0];

console.log("Det her er dataen til mig", myProfileData);
setmyProfile(myProfileData)
console.log("dette er min state", myprofile)
    }




  return (


<section>
<section>
{myprofile ? 
<div>

<h1>
  Velkommen tilbage  {myprofile.name}
</h1>

<section>
    <h2>
    Det bedste hårprodukt til dig

    </h2>

    <h4>
        {myprofile.q1}
    </h4>
    <p>
        {myprofile.a1}
    </p>
   
   { myprofile.q2 ? <div> <h4>{myprofile.q2}</h4> <p>{myprofile.q2}</p></div>:null}
   { myprofile.q3 ? <div> <h4>{myprofile.q3}</h4> <p>{myprofile.q3}</p></div>:null}
   { myprofile.q4 ? <div> <h4>{myprofile.q4}</h4> <p>{myprofile.q4}</p></div>:null}
   { myprofile.q5 ? <div> <h4>{myprofile.q5}</h4> <p>{myprofile.q5}</p></div>:null}
    
<button>
    Se dit resultat
</button>

</section>


</div>

: 

<div>
<label htmlFor="name">
Name
<input name="userName" id="name" type="text" />
</label>
<button onClick={showProfile}>Klick mig </button>
</div>


}



</section>



</section>



  );
}
