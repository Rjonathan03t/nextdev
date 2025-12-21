'use client';
import Calculator from "../common/calculator"
import { FaDivide } from "react-icons/fa6"

export default function Quotient() {
    return (
        <>
            <Calculator icon={FaDivide} type="quotient" />
        </>
    )
}