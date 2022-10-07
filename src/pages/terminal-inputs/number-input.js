import { React, useState, useContext } from 'react';
import { FontContext } from '../../context/context';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { BiFontSize } from 'react-icons/bi';
import { getLanguage } from '../../utils/getLanguage';
import BackButton from '../../components/backButton';
import Keyboard from './components/keyboard';
import './number-input.css';
// import 'antd/di  st/antd.css';
import { axiosInstance } from '../../utils/axios';
import { toast } from 'react-toastify';

const NumberInput = () => {
    const { setIsBig, isBig } = useContext(FontContext);
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const write = (number) => {
        if (text.length > 7) {
            return
        }
        if (parseInt(number) || number == 0) {
            // if (text.length == 2) {
            //     number = " " + number;
            // }
            setText(text + number);
        }
    }

    const clear = () => {
        let slice = text;
        // if (text.length === 4) {
        //     slice = text.slice(0, -1);
        // }
        setText(slice.slice(0, -1));
    }

    const confirm = async () => {
        const fullname = localStorage.getItem('terminal-fullname');
        const group_id = localStorage.getItem('terminal-id');
        const lang = localStorage.getItem('terminal');
        const phone_number = text ? text : null;
        if (text && (text[0] != '6' || text.length < 8 || text[1] > 5 || text[1] == 0)) {
            toast.error(lang == "tm" ? "Telefon belgiňiz nädogry!" : "Ваш номер телефона недействителен!");
            return
        }

        try {
            const res = await axiosInstance.post('api/v2/store_ticket', { fullname, phone_number, group_id, lang });
            const ticket_number_with_group = res.data.data.print_data.ticket_number;
            const ticket_info = res.data.data.ticket.ticket_info;
            const group_name_tm = res.data.data.ticket.group.group_name_tm;
            const group_name_ru = res.data.data.ticket.group.group_name_ru;
            toast.success(lang == "tm" ? "Üstünlikli nobata goýuldyňyz!" : "Üstünlikli nobata goýuldyňyz!");
            navigate('/language');
            let url = `http://notariat_terminal_qrcode.test/?ticket_number_with_group=${ticket_number_with_group}&ticket_info=${ticket_info}&group_id=${group_id}&lang=${lang}`;
            if (lang == "tm") {
                url = url + `&group_name_tm=${group_name_tm}`;
            } else {
                url = url + `&group_name_ru=${group_name_ru}`;
            }
            await axios.get(url);
        } catch (err) {
            if (err.response.data.error === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
                // <Navigate to='/notWorking' message={'KIOSK_DISABLED_BY_ADMINSTRATOR'} />
                navigate('/notWorking', { state: { message: "KIOSK_DISABLED_BY_ADMINSTRATOR" } });
            } else {
                // <Navigate to='/notWorking' message={'TIME_IS_UP'} />
                navigate('/notWorking', { state: { message: "TIME_IS_UP" } });
            }
        }
    }

    return (
        <div className='keyboard-input-container'>
            <div className='number-container'>
                <h2 className={`title ${isBig ? "title-big" : ""}`}>+993</h2>
                <input className={`number-input ${isBig ? "number-input-big" : ""}`} value={text} type='text' readOnly placeholder='66 123123' />
            </div>
            <Keyboard writeFunction={write} clearFunction={clear} />
            <div className='button-container'>
                <BackButton />
                <BiFontSize style={{ fontSize: "4.3rem", color: "red", marginBottom: "5px" }} onClick={() => setIsBig(!isBig)} />
                <button className='button' onClick={confirm}>
                    {getLanguage() == 'tm' ? "Tassyklamak" : "Утверждать"}
                </button>
            </div>
        </div>
    )
}

export default NumberInput;