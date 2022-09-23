import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/backButton';
import { getLanguage } from '../../utils/getLanguage';
import './noterial-actions.css'

const TerminalSubcategories = () => {
    const navigate = useNavigate();
    const subCategory = [
        {
            "doc_types_name_tm": "Mirasy resmileşdirmek",
            "doc_types_name_ru": "Оформление наследства",
            "id": 3
        },
        {
            "doc_types_name_tm": "Wesýetnamalary tassyklamak",
            "doc_types_name_ru": "Удостоверение завещаний",
            "id": 3
        },
        {
            "doc_types_name_tm": "Satyn almak-satmak, sowgat etmek we beýleki şertnamalary tassyklamak",
            "doc_types_name_ru": "Договора купли-продажи, дарение и другие",
            "id": 2
        },
        {
            "doc_types_name_tm": "Karz-girew şertnamalary tassyklamak",
            "doc_types_name_ru": "Договора залога-кредита",
            "id": 2
        },
        {
            "doc_types_name_tm": "Ynanç hatlary tassyklamak",
            "doc_types_name_ru": "Удостоверение доверенностей",
            "id": 1
        },
        {
            "doc_types_name_tm": "Resminamalarda gollary tassyklamak",
            "doc_types_name_ru": "Свидетельствование подлинности подписей на документах",
            "id": 1
        },
        {
            "doc_types_name_tm": "Bank hasap ýazmaçlarynda gollary tassyklamak",
            "doc_types_name_ru": "Свидетельствование подлинности подписей на банковских карточках",
            "id": 1
        },
        {
            "doc_types_name_tm": "Nusgalary tassyklamak",
            "doc_types_name_ru": "Свидетельствование подлинности подписей на банковских карточках",
            "id": 1
        },
        {
            "doc_types_name_tm": "Ýerine ýetiriliş ýazgylaryny amala aşyrmak",
            "doc_types_name_ru": "Совершение исполнительных надписей",
            "id": 2
        },
        {
            "doc_types_name_tm": "Resminamalaryň öwezligini almak",
            "doc_types_name_ru": "Получение дубликата документов",
            "id": 1
        },
        {
            "doc_types_name_tm": "Girizilen gadaganlyklary aýyrmak",
            "doc_types_name_ru": "Снятие наложенных запретов",
            "id": 2
        },
        {
            "doc_types_name_tm": "Hukuk maslahatyny almak",
            "doc_types_name_ru": "Юридическая консультация",
            "id": 4
        },
        {
            "doc_types_name_tm": "Beýleki hereketler",
            "doc_types_name_ru": "Другие действия",
            "id": 1
        }
    ]

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.id);
        navigate('/name');
    }

    return (
        <div className='subcategory-div'>
            <div className='subcategory-container'>
                {subCategory.map((item, index) =>
                    <div className='subcategory-item' key={index} onClick={() => handleClick(item)}>
                        <p className='subcategory-content'>{getLanguage() == 'tm' ? item.doc_types_name_tm : item.doc_types_name_ru}</p>
                    </div>
                )}
            </div>
            <BackButton className='noterial-button' />
        </div>
    )
}

export default TerminalSubcategories;