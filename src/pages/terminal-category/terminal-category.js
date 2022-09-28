import { React, useState, useEffect } from 'react';
import './terminal-category.css';
import edit from '../../img/edit.png';
import BackButton from '../../components/backButton';
import { useNavigate } from 'react-router-dom';
import { getLanguage } from '../../utils/getLanguage';
import { axiosInstance } from '../../utils/axios';
import { getToken } from '../../utils/getToken';

const TerminalCategory = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState(null);

    useEffect(() => {
        axiosInstance.get('api/v2/groups', { headers: { Authorization: `Bearer ${getToken()}` } }).then((res) => {
            console.log(res.data.data.groups);
            setCategory(res.data.data.groups);
        }).catch((err) => {
            console.log(err);
        });
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
                            <h2 className={`letter letter-${letter.toLowerCase()}`}>{letter}</h2>
                            <p className='category-content'>{language == 'tm' ? item.group_name_tm : item.group_name_ru}</p>
                        </div>
                    }
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