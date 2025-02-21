import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "../contexts/ThemeContext"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-200" />
      )}
    </button>
  );
};