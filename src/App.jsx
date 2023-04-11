import { React, useState } from "react";
import "./cssStyling/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateCrew } from "./pages/createCrew";
import { Gallery } from "./pages/gallery";
import {Dashboard} from "./components/dashboard";
import { AboutCrew } from "./pages/aboutCrew";
import { createClient } from "@supabase/supabase-js";
import {Update} from "./pages/update";
const supabaseUrl = "https://fewzacicwrajmacpxkxo.supabase.co";
const supabaseKey = import.meta.env.VITE_APP_API_KEY;

function App() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}>
      <Route index = {true} element={<Home />} />
      <Route path="/createCrew" element={<CreateCrew supabase={supabase} />} />
      <Route path="/gallery" element={<Gallery supabase={supabase} />} />
      <Route path="/about/:id" element={<AboutCrew supabase={supabase} />} />
      <Route path="/update/:id" element={<Update supabase={supabase} />} />
      </Route>
    </Routes>
  );
}

export default App;
