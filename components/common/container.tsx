
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode,
    className?: string
}

export default function Container({ children, className="" }: ContainerProps) {
    return (
        <div className={`h-fit mx-auto w-full max-w-[1300px] ${className}`}>
            {children}
        </div>
    )
}