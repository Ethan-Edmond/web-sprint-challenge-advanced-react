import { useState } from "react";

function useDarkMode (initialValue) {
  const [darkMode, setDarkMode] = useState(initialValue);

  const handleDarkMode = (e) => {
    setDarkMode(!darkMode);
  };
  return [darkMode, handleDarkMode];
};

export default useDarkMode;
