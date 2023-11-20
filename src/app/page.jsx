import Quiz from "./components/Quiz";
import GridLayout from "./components/GridLayout";

export default async function Home() {
  const res = await fetch("https://ghrfijuvauirpwoirtcq.supabase.co/rest/v1/filtreMatas", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocmZpanV2YXVpcnB3b2lydGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDI4ODcsImV4cCI6MTk5ODg3ODg4N30.OYkOttfTxQpFWSIFoRK-f0qW2S8j7U3tg6kAC3BLcnY",
    },
  });
  const data = await res.json();

  return (
    <main className="bg-slate-100">
      <Quiz data={data} />
      <GridLayout></GridLayout>
    </main>
  );
}
