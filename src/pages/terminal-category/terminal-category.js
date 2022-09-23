import React from 'react';
import './terminal-category.css';
import edit from '../../img/edit.png';
import BackButton from '../../components/backButton';
import { useNavigate } from 'react-router-dom';
import { getLanguage } from '../../utils/getLanguage';

const TerminalCategory = () => {
    const navigate = useNavigate();
    const category = [
        {
            letter: {
                value: "A",
                className: "letter-a"
            },
            content_tm: "Ynanç haty, nusga we gol tassyklamak",
            content_ru: "Доверенности, заверении копий и подленности подпись",
            id: 1
        },
        {
            letter: {
                value: "B",
                className: "letter-b"
            },
            content_tm: "Satyn almak-satmak, sowgat etmek, karz we girew",
            content_ru: "Пупля-продажа, дарение, залог и кредит",
            id: 2
        },
        {
            letter: {
                value: "Ç",
                className: "letter-c"
            },
            content_tm: "Miras we wesýetnama",
            content_ru: "Наследство и завещания",
            id: 3
        },
        {
            letter: {
                value: "D",
                className: "letter-d"
            },
            content_tm: "Hukuk maslahaty",
            content_ru: "Правовая помощь",
            id: 4
        }
    ]

    const language = getLanguage();

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.id)
        navigate('/name');
    }

    return (
        <div className='super-div'>
            <div className='category-container'>
                {
                    category.map(item =>
                        <div key={item.letter.value} onClick={() => handleClick(item)} className='category-item-container'>
                            <h2 className={`letter ${item.letter.className}`}>{item.letter.value}</h2>
                            <p className='category-content'>{language == 'tm' ? item.content_tm : item.content_ru}</p>
                        </div>
                    )
                }
            </div>
            <div className='category-buttons-container'>
                <BackButton />
                <button className='button' onClick={() => navigate('/noterialAction')} >
                    <img className='galam-icon' src={edit} alt='edit' />
                    {language == "tm" ? "Notarial hereket" : "Нотариальное действие"}
                </button>
            </div>
        </div>
    )
}

export default TerminalCategory;