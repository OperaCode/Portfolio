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
const [isDarkMode, setIsDarkMode] = useState(false);
const [hasMounted, setHasMounted] = useState(false);

// Set initial theme on mount
useEffect(() => {
  const dark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  setIsDarkMode(dark);
  setHasMounted(true);
}, []);

// Apply dark mode class after mount
useEffect(() => {
  if (!hasMounted) return;

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "";
  }
}, [isDarkMode, hasMounted]);

// Prevent rendering until after mount to avoid hydration issues
if (!hasMounted) return null;

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
