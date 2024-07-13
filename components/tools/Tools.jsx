import React, { useState } from 'react';
import ToolsCard from './ToolsCard';
import "./../../styles/sass/tools.scss"

const Tools = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioClick = (e) => {
        const value = e.target.value;
        // Agar hozirgi tanlangan radio tugmasi yana bosilsa, uni o'chiradi
        if (selectedOption === value) {
            setSelectedOption(null);
        } else {
            setSelectedOption(value);
        }
    };

    console.log(selectedOption);

    return (
        <div className='tools'>
            <div className='container'>
                <div className='tools__wrapper'>
                    <div className=''>
                        <h1 className='tools__title'>Tools</h1>
                        <ul className='tools__list'>
                            <li className='tools__list__item'>
                                <input
                                    type='radio'
                                    value="frontend"
                                    checked={selectedOption === 'frontend'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>Frontend</p>

                                <input
                                    type='radio'
                                    value="backend"
                                    checked={selectedOption === 'backend'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>Backend</p>
                            </li>
                           
                            <li className='tools__list__item'>
                                <input
                                    type='radio'
                                    value="devops"
                                    checked={selectedOption === 'devops'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>DevOps</p>

                                <input
                                    type='radio'
                                    value="testing"
                                    checked={selectedOption === 'testing'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>Testing</p>
                            </li>

                          
                            <li className='tools__list__item'>
                                <input
                                    type='radio'
                                    value="ux"
                                    checked={selectedOption === 'ux'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>UX/UI</p>
                                <input
                                    type='radio'
                                    value="infrastructure"
                                    checked={selectedOption === 'infrastructure'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>Infrastructure</p>
                            </li>


                            <li className='tools__list__item'>
                                <input
                                    type='radio'
                                    value="mobil"
                                    checked={selectedOption === 'mobil'}
                                    onClick={handleRadioClick}
                                    readOnly
                                />
                                <p>Mobile</p>
                            </li>
                        </ul>
                    </div>
                    <div className='tools__cards'>
                        <ToolsCard val = {selectedOption} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;
