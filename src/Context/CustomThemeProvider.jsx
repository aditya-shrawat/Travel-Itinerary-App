import React, { createContext, useEffect, useState } from "react";

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};
