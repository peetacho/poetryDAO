import React from 'react';
import Button from './../Button/index.js';


const Card = ({
    title,
    description,
    button_source,
    photo,
    ...otherProps
}) => {
    return (
        <div className='my-6'>
            <img src= {photo} alt='pic' className='inline-block w-1/4 align-top'/>
            <div className='text-left text-primary inline-block w-2/3 px-4 ml-8'>
                <h1 className='md:text-6xl mt-6 mb-5'>{title}</h1>
                <h3 className='md:text-xl my-2'>{description}</h3>
                {button_source.map((i) => (
                    <Button {...i}/>
                ))}
            </div>
        </div>
    );
};

export default Card;