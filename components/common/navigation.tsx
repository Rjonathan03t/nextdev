import Link from 'next/link';
import { MdCancel } from "react-icons/md";
type NavigationProps = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
    const navItem = [
        { item: 'Calculator', path: '/calculator' },
        { item: 'Blog', path: '/blog' },
        { item: 'Home', path: '/' }
    ]
    return (
        <div className=' flex flex-col justify-center gap-2 p-12'>
            <MdCancel
                className='text-4xl text-black self-end cursor-pointer my-12
            hover:scale-105 duration-105 transition'
                onClick={() => {
                    setIsOpen(!isOpen);
                }} />
            {navItem.map((nav, i) => (
                <div
                    key={i}
                    className='flex'
                >
                    <Link
                        href={nav.path}
                        className='text-4xl text-center font-light text-black outline-none bg-transparent w-full py-2
                     duration-105 transition hover:text-white hover:bg-green-700'
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {nav.item}
                    </Link>
                </div>
            ))}

        </div>
    )
}