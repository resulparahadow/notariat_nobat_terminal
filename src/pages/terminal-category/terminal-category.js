import { React, useState, useEffect, useContext } from 'react';
import './terminal-category.css';
import edit from '../../img/edit.png';
import BackButton from '../../components/backButton';
import { useNavigate } from 'react-router-dom';
import { getLanguage } from '../../utils/getLanguage';
import { FontContext } from '../../context/context';
import FontButton from '../../components/fontButton';

const TerminalCategory = () => {
    const { isBig } = useContext(FontContext);
    const navigate = useNavigate();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const category = JSON.parse(localStorage.getItem('terminal-category'));
        let filteredCategory = [];
        if (category.success) {
            category.groups.forEach(item => {
                let now = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
                if (item.visible && ((item.ticket_time_from < now && now < item.ticket_break_from) || (item.ticket_break_to < now && now < item.ticket_time_to))) {
                    filteredCategory.push(item);
                }
            })
        } else {
            if (category.err === 1) {
                window.location.href = '/disabled';
            } else if (category.err === 2) {
                window.location.href = '/timeUp';
            } else {
                window.location.href = '/notWorking';
            }
        }
        setCategory(filteredCategory);
    }, [])

    const language = getLanguage();

    const handleClick = (item) => {
        localStorage.setItem('selected-group', JSON.stringify({ group_id: item.id, group_name_tm: item.group_name_tm, group_name_ru: item.group_name_ru }));
        navigate('/name');
    }


    return (
        <div className='super-div'>
            <div className='category-container'>
                {
                    category?.map((item, index) => {
                        let letter = item.ticketLetter;
                        if (item.visible) {
                            return <div key={index} onClick={() => handleClick(item)} className='category-item-container'>
                                <h2 className={`letter ${isBig ? "letter-big" : ""} letter-${letter.toLowerCase()}`}>{letter}</h2>
                                <p className={`category-content ${!isBig ? "content-big" : ""}`}>{language == 'tm' ? item.group_name_tm : item.group_name_ru}</p>
                            </div>
                        }
                    }
                    )
                }
            </div>
            <div className='category-buttons-container'>
                <BackButton />
                <FontButton />
                <button className='button' onClick={() => navigate('/noterialAction')} >
                    <img className='galam-icon' src={edit} alt='edit' />
                    {language == "tm" ? "Notarial hereket" : "Нотариальное действие"}
                </button>
            </div>
        </div>
    )
}

export default TerminalCategory;