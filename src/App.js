import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header';
import { ToastContainer } from 'react-toastify';
import TerminalCategory from "./pages/terminal-category/terminal-category";
import NameInput from "./pages/terminal-inputs/name-input";
import TerminalLanguage from './pages/terminal-language/terminal-language';
import TerminalSubcategories from "./pages/noterial-actions/noterial-actions";
import NotWorking from "./pages/not-working/not-working.js";
import NumberInput from './pages/terminal-inputs/number-input';
import { categoryReq, noterialReq } from "./utils/requests";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  useEffect(() => {
    categoryReq();
    noterialReq();
  }, [])

  return (
    <>
      <ToastContainer className='tost' position="top-center" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/language' element={<TerminalLanguage />} exact />
          <Route path='/category' element={<TerminalCategory />} exact />
          <Route path='/noterialAction' element={<TerminalSubcategories />} exact />
          <Route path='/name' element={<NameInput />} exact />
          <Route path='/number' element={<NumberInput />} exact />
          <Route path='/notworking' element={<NotWorking />} exact />
          <Route path='*' element={<Navigate to='/language' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
