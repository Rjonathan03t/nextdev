'use client';
import Calculator from "../common/calculator"
import { FaMinus } from "react-icons/fa6"

export default function Substraction() {
    return (
        <>
           <Calculator icon={FaMinus} type="substraction"/>
        </>
    )
}