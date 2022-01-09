import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from './../../assets/logo.png';
import { NavElements, Icons } from "../../constants/constants";
import {AiOutlineMenu} from 'react-icons/ai';
import { IconContext } from "react-icons";

const TempHeader = ({
    ...otherProps
}) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }

    return (
        <header className="bg-background relative">
            <div className="flex items-center justify-between px-12 p-5">

                <div 
                    onClick={onClick}
                    className={`
                        lg:hidden cursor-pointer transition-colors duration-150 bg-transparent hover:opacity-75
                    `}
                >
                    <IconContext.Provider value={{ color: "#545454", size: "2rem" }}>
                        <div>
                            <AiOutlineMenu />
                        </div>
                    </IconContext.Provider>
                </div>

                <div className="w-12 md:w-44" >
                    <Link
                            className="cursor-pointer"
                            to= "/"
                        >
                        <img src= {Logo} alt="Logo" className={`
                            absolute left-0 right-0 bottom-4 ml-auto mr-auto w-44
                            
                            lg:w-full lg:static
                        `}/>
                    </Link>
                </div>

                <nav
                    className={`
                        ${!active && 'hidden'}
                        absolute flex flex-col bg-background top-full w-full left-0 z-20
                        lg:static lg:w-auto lg:flex text-primary
                    `}
                >
                    <ul className="lg:flex-row lg:flex">

                        {/* ICONS */}
                        
                        {Icons.map((i) => (
                            <li className="list-none lg:mr-5">
                                <Link
                                    className="flex w-full text-lg cursor-default"
                                    to={{ pathname: i.pathname }} 
                                    target="_blank"
                                >
                                    <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-transparent hover:opacity-75">
                                        <img src={i.icon} alt= {i.alt}/>
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default TempHeader;