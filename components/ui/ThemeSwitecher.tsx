"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // Default to dark if theme is 'dark' or null
      document.documentElement.classList.add("dark");
      setIsDark(true);
      if (theme === null) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !html.classList.contains("dark");

    if (newIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="flex items-center justify-center transition-colors"
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-gray-800" />
      )}
    </button>
  );
}
