import Quiz from "./components/Quiz";
import GridLayout from "./components/GridLayout";

export default async function Home() {
  const res = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/filtreMatas", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
    },
  });

  const data = await res.json();

  const res2 = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/matasProducts", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
    },
  });
  const data2 = await res2.json();

  return (
    <main className="bg-slate-100">
      <GridLayout data2={data2} data={data}></GridLayout>
    </main>
  );
}
