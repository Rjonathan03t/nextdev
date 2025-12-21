'use client'
import { useEffect, useState } from 'react';
import { FaPlus, FaEquals } from "react-icons/fa6";
import Container from '../common/container';

export default function Sum() {
  const [total, setTotal] = useState<number>(0);
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);

  const getSum = () => {
    const sum = value1 + value2;
    setTotal(sum);
  }
  
  const resetInput = () => {
    setTotal(0)
    setValue1(0)
    setValue2(0)
  }

  return (
    <Container>
      <h1 className="text-center text-4xl font-light">
        Mini calculator
      </h1>
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl'>
          Sum
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
            <FaPlus className='text-xl' />
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
              className='rounded-2xl py-5 px-6 cursor-pointer font-semibold text-2xl'
              onClick={getSum}>
              Get sum
            </button>
            <button
              type='button'
              style={{ backgroundColor: "var(--primary)" }}
              className='rounded-2xl py-5 px-6 cursor-pointer text-green-500 font-semibold text-2xl'
              onClick={resetInput}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
