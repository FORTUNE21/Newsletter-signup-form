import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Newsletter from "./components/Newsletter";
import { ThemeContext } from './ThemeContext';
import Thankyou from "./components/Thankyou";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <ThemeContext.Provider value={{ input, setInput }}>
        <Routes>
          <Route index element={<Newsletter />} />
          <Route path='thankyou' element={<Thankyou />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
