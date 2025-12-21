'use client'

import Calculator from "../common/calculator";
import { FaTimes } from "react-icons/fa";

export default function Times() {
    return (
        <>
            <Calculator icon={FaTimes} type="multiplication"/>
        </>
    )
}