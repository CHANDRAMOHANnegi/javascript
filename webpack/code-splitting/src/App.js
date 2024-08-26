import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Home } from './components/home'
import { About } from './components/about'
import { Faq } from './components/faq'
import reportWebVitals from "./reportWebVitals"

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>

        <Routes>
          <Route index element={<React.Suspense fallback={<>Loading...</>}>
            <Home />
          </React.Suspense>} />
        </Routes>

        <Routes>
          <Route path='about' element={<React.Suspense fallback={<>Loading...</>}>
            <About />
          </React.Suspense>} />
        </Routes>

        <Routes>
          <Route path='faq' element={<React.Suspense fallback={<>Loading...</>}>
            <Faq />
          </React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

reportWebVitals(console.log)