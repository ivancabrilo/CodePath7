import { React, useState } from "react";
import "./cssStyling/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateCrew } from "./pages/createCrew";
import { Gallery } from "./pages/gallery";
import {Dashboard} from "./components/dashboard";
// const supabaseUrl = "https://fewzacicwrajmacpxkxo.supabase.co";
// const supabaseKey = import.meta.env.VITE_APP_API_KEY;
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fewzacicwrajmacpxkxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZld3phY2ljd3Jham1hY3B4a3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMDU0OTgsImV4cCI6MTk5NjY4MTQ5OH0.GZr8MLr4o81yj117JYUAKI4wDvmvta5DLXAUGXxhJUI";

function App() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}>
      <Route index = {true} element={<Home />} />
      <Route path="/createCrew" element={<CreateCrew supabase={supabase} />} />
      <Route path="/gallery" element={<Gallery supabase={supabase} />} />
      </Route>
    </Routes>
  );
}

export default App;
