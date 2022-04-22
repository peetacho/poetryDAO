import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    source,
    text,
    is_external,
    ...otherProps
}) => {
    return (
        <Link
            to={{ pathname: source }} 
            target= {is_external ? "_blank" : ""}
        >
            <button className="bg-transparent text-base text-primary lg:py-2 lg:px-2 rounded-full border-2 border-primary lg:my-4 lg:mr-4
                py-1 px-2 my-2 mr-2 w-52
                hover:text-background hover:bg-primary transition duration-300
            "
            >
                {text}
            </button>
        </Link>
    );
};

export default Button;