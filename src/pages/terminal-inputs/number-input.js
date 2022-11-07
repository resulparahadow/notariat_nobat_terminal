import { React, useState, useContext } from 'react';
import { FontContext } from '../../context/context';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { getLanguage } from '../../utils/getLanguage';
import BackButton from '../../components/backButton';
import Keyboard from './components/keyboard';
import './number-input.css';
import { AiOutlineLoading } from "react-icons/ai";
import { axiosInstance } from '../../utils/axios';
import { toast } from 'react-toastify';
import FontButton from '../../components/fontButton';

const NumberInput = () => {
    const { setIsBig, isBig } = useContext(FontContext);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const write = (number) => {
        if (text.length > 7) {
            return
        }
        if (parseInt(number) || number == 0) {
            setText(text + number);
        }
    }

    const clear = () => {
        let slice = text;
        setText(slice.slice(0, -1));
    }

    const notAttention = async (ticket_number_with_group, ticket_info, group_id, lang, selectedGroup) => {
        const group_name_tm = selectedGroup.group_name_tm;
        const group_name_ru = selectedGroup.group_name_ru;

        let url = `http://notariat_terminal_qrcode.test/?ticket_number_with_group=${ticket_number_with_group}&ticket_info=${ticket_info}&group_id=${group_id}&lang=${lang}`;
        if (lang == "tm") {
            url = url + `&group_name_tm=${group_name_tm}`;
        } else {
            url = url + `&group_name_ru=${group_name_ru}`;
        }
        await axios.get(url);
    }

    const confirm = async () => {
        setLoading(true);
        const fullname = localStorage.getItem('terminal-fullname');
        const selectedGroup = JSON.parse(localStorage.getItem('selected-group'));
        const group_id = selectedGroup.group_id;
        const lang = getLanguage();
        const phone_number = text ? text : null;
        if (text && (text[0] != '6' || text.length < 8 || text[1] > 5 || text[1] == 0)) {
            toast.error(lang == "tm" ? "Telefon belgiňiz nädogry!" : "Ваш номер телефона недействителен!");
            setLoading(false);
            return
        }

        try {
            const res = await axiosInstance.post('/store_ticket', { fullname, phone_number, group_id, lang });
            const ticket_number_with_group = res.data.data.print_data.ticket_number;
            const ticket_info = res.data.data.ticket.ticket_info;
            const group_name_tm = res.data.data.ticket.group.group_name_tm;
            const group_name_ru = res.data.data.ticket.group.group_name_ru;
            toast.success(lang == "tm" ? "Üstünlikli nobata goýuldyňyz!" : "Вы успешно встали в очередь!!");
            setLoading(false);
            notAttention(ticket_number_with_group, ticket_info, group_id, lang, selectedGroup);
            navigate('/language');
        } catch (err) {
            setLoading(false);
            if (err.response?.data?.error === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
                navigate('/notWorking', { state: { message: "KIOSK_DISABLED_BY_ADMINSTRATOR" } });
            } else if (err.response?.data?.error === 'TIME_IS_UP') {
                navigate('/notWorking', { state: { message: "TIME_IS_UP" } });
            } else {
                navigate('/notWorking');
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
                <FontButton />
                <button className='button confirm-button' onClick={confirm} disabled={loading}>
                    {loading ? <AiOutlineLoading className='loading-icon' /> : (getLanguage() == 'tm' ? "Almak" : "Получать")}
                </button>
            </div>
        </div>
    )
}

export default NumberInput;