'use client'

import { FaPlus } from "react-icons/fa6";
import Calculator from "../common/calculator";

export default function Sum() {
    return (
        <div>
            <Calculator icon={FaPlus} type="sum" />
        </div>
    );
}
