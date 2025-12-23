'use client'
import { useState } from 'react';
import { FaSortDown, FaSortUp } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
import Container from '../common/container';
export default function Header() {
    const [dropDown, setDropDown] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState("Dark");
    const [chooseItem, setChooseItem] = useState("Light");
    const [currentIcon, setCurrentIcon] = useState(<FaMoon />);
    const [chooseIcon, setChooseIcon] = useState(<FaSun />);

    const handleDropDown = () => {
        setDropDown(prev => !prev);
    }

    const chooseMode = () => {
        setCurrentItem(prev => {
            const newItem = chooseItem;
            setChooseItem(prev);
            return newItem;
        });
        setCurrentIcon(prev => {
            const newIcon = chooseIcon;
            setChooseIcon(prev);
            return newIcon;
        });
    }

    return (
        <Container className='mt-5'>
            <div className="flex flex-row  justify-between min-h-30">
                <h1 className="text-center text-5xl font-light">
                    Mini basic calculator
                </h1>
                <div>
                    <button
                        type='button'
                        className='p-2 flex items-center flex-row gap-2 rounded-full cursor-pointer border border-secondary'
                        onClick={handleDropDown}
                    >

                        <div
                            className='flex flex-row items-center px-5 gap-2'
                        >
                            <p className='font-light'>
                                {currentItem}
                            </p>
                            {currentIcon}
                        </div>

                        {
                            dropDown ? (
                                <FaSortUp />
                            ) :
                                (
                                    <FaSortDown />
                                )
                        }
                    </button>
                    <button
                        type='button'
                        className={dropDown ? 'p-2 flex items-center flex-row gap-2 rounded-full cursor-pointer' : 'hidden'}
                        onClick={() => {
                            handleDropDown();
                            chooseMode();
                        }}>
                        {
                            dropDown ? (
                                <div
                                    className='flex flex-row items-center px-5 gap-2'
                                >
                                    <p className='font-light'>
                                        {chooseItem}
                                    </p>
                                    {chooseIcon}
                                </div>
                            ) : ('')
                        }
                    </button>
                </div>
            </div>
        </Container >
    )
}