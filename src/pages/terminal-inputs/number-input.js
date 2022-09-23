import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLanguage } from '../../utils/getLanguage';
import BackButton from '../../components/backButton';
import Keyboard from './components/keyboard';
import './number-input.css';
import { getToken } from '../../utils/getToken';
import { axiosInstance } from '../../utils/axios';

const NumberInput = () => {
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
        const phone_number = text == "" ? null : text;
        navigate('/language');
        axiosInstance.post('api/v2/store_ticket', { fullname, phone_number, group_id }, { headers: { Authorization: `Bearer ${getToken()}` } }).then(() => {
            console.log(fullname, group_id, text);
        }).catch((err) => console.log(err))
    }

    return (
        <div className='keyboard-input-container'>
            <div className='number-container'>
                <h2 className='title'>+993</h2>
                <input className='number-input' value={text} type='text' placeholder='66 123123' />
            </div>
            <Keyboard writeFunction={write} clearFunction={clear} />
            <div className='button-container'>
                <BackButton />
                <button className='button' onClick={confirm}>
                    {getLanguage() == 'tm' ? "Tassyklamak" : "Утверждать"}
                </button>
            </div>
        </div>
    )
}

export default NumberInput;