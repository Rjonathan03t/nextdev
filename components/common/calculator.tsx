'use client'
import { useState } from 'react';
import { FaPlus, FaEquals } from "react-icons/fa6";
import { IconType } from "react-icons";
import Container from '../common/container';

interface CalculatorProps {
    type: string,
    icon: IconType
}

export default function Calculator({
    type,
    icon: Icon
}:
    CalculatorProps
) {
    const [total, setTotal] = useState<number>(0);
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);

    const fetch =  () =>{
        
    }

    const getSum = () => {
        const sum = value1 + value2;
        setTotal(sum);
    }

    const getSubstract = () => {
        const substract = value1 - value2;
        setTotal(substract);
    }

    const getQuotient = () => {
        const quotient = value1 / value2;
        setTotal(quotient);
    }

    const getTimes = () => {
        const times = value1 * value2;
        setTotal(times);
    }

    const resetInput = () => {
        setTotal(0)
        setValue1(0)
        setValue2(0)
    }

    return (
        <Container className='my-12'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl uppercase font-light'>
                    {type}
                </h1>
                <div className='flex flex-row items-center gap-5'>
                    <div
                        className='flex flex-row gap-5 rounded-full py-5 px-12 justify-center items-center'
                        style={{ border: "1px solid var(--secondary)" }}>
                        <input
                            type="number"
                            onChange={(e) => setValue1(Number(e.target.value))}
                            value={value1}
                            className='outline-none text-center text-2xl w-12'
                        />
                        <Icon className='text-xl' />
                        <input
                            type="number"
                            onChange={(e) => setValue2(Number(e.target.value))}
                            value={value2}
                            className='outline-none text-center text-2xl w-12'
                        />
                        <FaEquals className='text-xl' />
                        <p className='text-2xl'>
                            {total}
                        </p>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <button
                            type='button'
                            style={{ backgroundColor: "var(--secondary)" }}
                            className='rounded-2xl py-2 px-4 cursor-pointer  text-xl'
                            onClick={() => {
                                switch (type) {
                                    case 'sum':
                                        getSum();
                                        break;
                                    case 'substraction':
                                        getSubstract();
                                        break;
                                    case 'quotient':
                                        getQuotient();
                                        break;
                                    case 'multiplication':
                                        getTimes();
                                    default : ''
                                }
                            }}>
                            Total
                        </button>
                        <button
                            type='button'
                            style={{ backgroundColor: "var(--primary)" }}
                            className='rounded-2xl py-2 px-4 cursor-pointer text-green-500  text-xl'
                            onClick={resetInput}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </Container >
    );
}
