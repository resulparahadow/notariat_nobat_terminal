import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontContext } from '../../context/context';
import BackButton from '../../components/backButton';
import { BiFontSize } from 'react-icons/bi';
import Keyboard from './components/keyboard';
import { getLanguage } from '../../utils/getLanguage';
import back from '../../img/backWhite.png';
import './name-input.css'
import { toast } from 'react-toastify';
import FontButton from '../../components/fontButton';

const NameInput = () => {
    const { setIsBig, isBig } = useContext(FontContext);
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const write = (letter) => {
        if (text.length === 0) {
            return setText(letter);
        }
        if (text[text.length - 1] == " ") {
            setText(text + letter);
        } else {
            setText(text + letter.toLowerCase())
        }
    }

    const clear = () => {
        if (text.length > 0) {
            setText(text.slice(0, -1));
        }
    }

    const nextHandle = () => {
        if (text.length > 0) {
            localStorage.setItem("terminal-fullname", text);
            navigate('/number');
            return
        }

        toast.error(localStorage.getItem('terminal') == 'tm' ? "Adyňyzy we familiýaňyzy girizmegiňizi haýyş edýäris" : "Просим ввести имя и фамилию");
    }

    return (
        <div className='myDiv'>
            <div className='input-name-container'>
                <div className={`input-container ${isBig ? "input-container-big" : ""}`}>
                    <input className={`name-input ${isBig ? "name-input-big" : ""}`} value={text} type='text' placeholder={`${getLanguage() == "tm" ? 'Ady, familiýasy' : 'Имя, фамилия'}`} readOnly />
                </div>
                <Keyboard writeFunction={write} clearFunction={clear} />
            </div>
            <div className='button-container'>
                <BackButton className='back-button' />
                <FontButton />
                <button className='button' onClick={nextHandle}>
                    {getLanguage() == 'tm' ? "Indiki" : "Следующий"}
                    <img style={{ marginLeft: "12px", width: "25px", transform: "rotate(180deg)" }} src={back} alt='vector' />
                </button>
            </div>
        </div>
    )
}

export default NameInput;