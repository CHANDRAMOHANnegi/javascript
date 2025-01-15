import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
// import Home from './components/home';
// import About from './components/about';
import Faq from './components/faq';
import { NavWrapper } from './components/nav-wrapper';
// import Store from './components/store';

const LazyHome = lazy(() => import("./components/home"))
const LazyStore = lazy(() => import("./components/store"))
// named component
const LazyAbout = lazy(() => import("./components/about").then(module=>({default:module.About})))

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<NavWrapper />}>
            <Route index element={<LazyHome />} />
            <Route path='/store' element={<LazyStore />} />
            <Route path='/about' element={<LazyAbout />} />
            <Route path='/faq' element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
