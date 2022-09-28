import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header';
import TerminalCategory from "./pages/terminal-category/terminal-category";
import NameInput from "./pages/terminal-inputs/name-input";
import TerminalLanguage from './pages/terminal-language/terminal-language';
import TerminalSubcategories from "./pages/noterial-actions/noterial-actions";
import NumberInput from './pages/terminal-inputs/number-input';
import { categoryReq } from "./utils/requests";
import './App.css';

function App() {

  useEffect(() => {
    var interval = setInterval(() => categoryReq(), 1000 * 60 * 10);
    return () => clearInterval(interval);
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/language' element={<TerminalLanguage />} />
        <Route path='/category' element={<TerminalCategory />} />
        <Route path='/noterialAction' element={<TerminalSubcategories />} />
        <Route path='/name' element={<NameInput />} />
        <Route path='/number' element={<NumberInput />} />
        <Route path='*' element={<Navigate to='/language' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
