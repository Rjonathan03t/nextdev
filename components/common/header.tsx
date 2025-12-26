'use client'
import { useState,useRef } from 'react';
import { FaSortDown, FaSortUp } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from '../common/container';
import Navigation from '../common/navigation';
export default function Header() {
    const [dropDown, setDropDown] = useState<boolean>(false);
    const [currentItem, setCurrentItem] = useState("Dark");
    const [chooseItem, setChooseItem] = useState("Light");
    const [currentIcon, setCurrentIcon] = useState(<FaMoon />);
    const [chooseIcon, setChooseIcon] = useState(<FaSun />);
    const [isOpen, setIsOpen] = useState(false);
    const navigationRef = useRef<HTMLDivElement>;

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
        <div>
            <Container className='mt-5'>
                <div className="flex flex-row items-center justify-between border-b-white border-b py-2 ">
                    <h1 className="text-center text-5xl font-light pointer-events-none">
                        BAC
                    </h1>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-col items-center gap-2'>
                            <button
                                type='button'
                                className='p-2 flex items-center flex-row  rounded-full cursor-pointer border border-secondary'
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
                                className={dropDown ? 'absolute top-22 right-50 p-2 flex items-center flex-row gap-2 rounded-full cursor-pointer' : 'absolute'}
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
                        <RxHamburgerMenu
                            className='text-4xl cursor-pointer transition duration-105 hover:scale-105 bg-white text-black rounded-full p-2'
                            onClick={() => {
                                setIsOpen(prev => {
                                    return !prev
                                })
                            }}
                        />
                    </div>
                </div>
            </Container >
            {
                isOpen ?
                    (
                        <div className='w-full h-screen fixed top-0 z-20 bg-white'>
                            <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                        </div>
                    )
                    :
                    ('')
            }
        </div>
    )
}