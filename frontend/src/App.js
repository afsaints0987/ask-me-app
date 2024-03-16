import React, { useEffect, useState } from "react";
import AskPrompt from "./components/AskPrompt";
import { useTheme } from "./context/ThemeContext";
import './App.css'

function App() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))

  useEffect(() =>{
    setCurrentTheme(localStorage.getItem("theme"))
  },[theme])

  return (
      <div className={currentTheme}>
        <AskPrompt />
      </div>
  );
}

export default App;
