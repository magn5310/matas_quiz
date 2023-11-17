import ProductCard from "./ProductCard";
import QuizCard from "./QuizCard";








export  default async function  GridLayout() {
   
   
   
   
   

   
  
  const res = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/matasProducts", {
    headers: {
      'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
    },
  });
  const data = await res.json();
  
  console.log("Det her er min",data)   
  
  
  
  return (

    <div className="grid grid-cols-mainGrid gap-4 p-32 items-stretch">
    <QuizCard/>    
     {
  data.map((item) => (
    <ProductCard name={item.name} image={item.image} brand={item.brand} id={item.id} price={item.price} key={item.id}/>
  ))} 
  
  


    

    </div>
  );
}
