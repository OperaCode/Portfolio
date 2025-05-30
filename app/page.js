"use client"

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Work from "./components/Work";

// 💡 Apply theme before React mounts to prevent FOUC
if (typeof window !== "undefined") {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

// useEffect(()=>{
// if(localStorage.theme === "dark" || (! ("theme" in localStorage)&& window.matchMedia("(prefers-color-scheme:dark)").matches)){
//   setIsDarkMode(true)
// }else{
//   setIsDarkMode(false)
// }
// },[])

const [isDarkMode, setIsDarkMode] = useState(() => {
  if (typeof window !== "undefined") {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
  return false;
});


  useEffect(()=>{
if(isDarkMode){
  document.documentElement.classList.add("dark")
  localStorage.theme = "dark";
}else{
  document.documentElement.classList.remove("dark");
  localStorage.theme = "";
}
  },[isDarkMode])
  return (
    <>
    <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
