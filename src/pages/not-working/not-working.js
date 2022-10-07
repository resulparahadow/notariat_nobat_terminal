import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './not-working.css';

const NotWorking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state.message;
    console.log(message)
    const language = localStorage.getItem("terminal");
    let txt = '';

    if (message === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
        if (language == 'tm') {
            txt = 'Terminal administrasiýa tarapyndan öçürilen!';
        } else {
            txt = 'Терминал отключен администратором!';
        }
    } else {
        if (language == 'tm') {
            txt = 'Kategoriýanyň iş wagty gutardy!';
        } else {
            txt = 'Категория устарела!';
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
            <div className='not-working-container'>
                <h1 className='content'>{txt}</h1>
            </div>
            <button className='button' onClick={() => navigate('/language')} > {language == 'tm' ? "Yza" : "Назад"}</button>
        </div>
    )
}

export default NotWorking;