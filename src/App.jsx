import { createContext, useState } from 'react';
import './App.css';
import Page from './Page';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curTheme) => (curTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Page />
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;
