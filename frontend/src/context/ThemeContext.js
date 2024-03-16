import React, { createContext, useState, useContext } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component to wrap your app and provide the theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
