import { React, useState, useEffect, useContext } from 'react';
import './terminal-category.css';
import edit from '../../img/edit.png';
import BackButton from '../../components/backButton';
import { useNavigate } from 'react-router-dom';
import { getLanguage } from '../../utils/getLanguage';
import { axiosInstance } from '../../utils/axios';
import { getToken } from '../../utils/getToken';
import { FontContext } from '../../context/context';
import { BiFontSize } from "react-icons/bi";

const TerminalCategory = () => {
    const { setIsBig, isBig } = useContext(FontContext);
    const navigate = useNavigate();

    const [category, setCategory] = useState(null);

    useEffect(() => {
        const category = JSON.parse(localStorage.getItem('terminal-category'));
        setCategory(category);
    }, [])

    const language = getLanguage();

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.id)
        navigate('/name');
    }

    return (
        <div className='super-div'>
            <div className='category-container'>
                {
                    category?.map((item, index) => {
                        let letter = item.ticketLetter;
                        return <div key={index} onClick={() => handleClick(item)} className='category-item-container'>
                            <h2 className={`letter ${isBig ? "letter-big" : ""} letter-${letter.toLowerCase()}`}>{letter}</h2>
                            <p className={`category-content ${!isBig ? "content-big" : ""}`}>{language == 'tm' ? item.group_name_tm : item.group_name_ru}</p>
                        </div>
                    }
                    )
                }
            </div>
            <div className='category-buttons-container'>
                <BackButton />
                <BiFontSize style={{ fontSize: "4.3rem", color: "red", marginBottom: "5px" }} onClick={() => setIsBig(!isBig)} />
                <button className='button' onClick={() => navigate('/noterialAction')} >
                    <img className='galam-icon' src={edit} alt='edit' />
                    {language == "tm" ? "Notarial hereket" : "Нотариальное действие"}
                </button>
            </div>
        </div>
    )
}

export default TerminalCategory;