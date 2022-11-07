import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header';
import { ToastContainer } from 'react-toastify';
import TerminalCategory from "./pages/terminal-category/terminal-category";
import NameInput from "./pages/terminal-inputs/name-input";
import TerminalLanguage from './pages/terminal-language/terminal-language';
import TerminalSubcategories from "./pages/noterial-actions/noterial-actions";
import NotWorking from "./pages/not-working/not-working.js";
import TimeUp from "./pages/not-working/timeUp.js";
import KioskDisabled from "./pages/not-working/kioskDisabled.js";
import NumberInput from './pages/terminal-inputs/number-input';
import { getToken } from './utils/getToken';
import { getLanguage } from './utils/getLanguage';
import { axiosInstance } from './utils/axios';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const categoryReq = async (text) => {
    try {
      const categoryData = await axiosInstance.get('/groups', { headers: { Authorization: `Bearer ${getToken()}` } });
      const group = categoryData.data.data.groups;
      localStorage.setItem('terminal-category', JSON.stringify({ success: true, groups: group }));
      setTimeout(() => categoryReq(), 1000 * 60 * 10);
    } catch (err) {
      if (err.response?.data?.error === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 1 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      } else if (err.response?.data?.error === 'TIME_IS_UP') {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 2 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      } else {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 3 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      }
    }
  }


  const noterialReq = async () => {
    try {
      const noterialData = await axiosInstance.get('/document_types', { headers: { Authorization: `Bearer ${getToken()}` } });
      const noterial = noterialData.data.data.document_types;
      localStorage.setItem('terminal-noterial', JSON.stringify({ success: true, noterials: noterial }));
      setInterval(() => noterialReq(), 1000 * 60 * 10);
    } catch (err) {
      if (err.response?.data?.error === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 1 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      } else if (err.response?.data?.error === 'TIME_IS_UP') {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 2 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      } else {
        localStorage.setItem('terminal-category', JSON.stringify({ success: false, err: 3 }));
        setTimeout(() => categoryReq(), 1000 * 30);
      }
    }
  }

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
          <Route path='/disabled' element={<KioskDisabled />} exact />
          <Route path='/timeUp' element={<TimeUp />} exact />
          <Route path='*' element={<Navigate to='/language' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
