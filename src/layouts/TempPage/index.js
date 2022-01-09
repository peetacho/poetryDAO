import React from 'react';
import TempHeader from './../../components/TempHeader';
import Hero from './../../assets/hero.png'
import Button from '../../components/Button';

const TempPageLayout = ({
    ...otherProps
}) => {
    return (
        <div className='min-h-full bg-background'>
            <div className='h-screen flex flex-col'>
                <TempHeader/>

                <div
                    className="
                        relative flex items-center h-full
                        bg-cover bg-center bg-no-repeat 
                        px-12
                    "
                    style={{
                        backgroundImage: `url(${Hero})`
                    }}
                >
                    <div
                        className="
                            relative z-10 text-xl text-left text-primary max-w-5xl
                        "
                    >
                        <h1 className='text-3xl mb-4 md:text-8xl mt-6 md:mb-12'>Empowering the next generation of poets.</h1>
                        <h3 className='md:text-3xl md:my-2'>Welcome to the home of Poetry in Web3.</h3>
                        <h3 className='md:text-3xl md:my-2'>Support the Creator's Economy.</h3>
                        <h3 className='my-2 md:text-3xl md:my-2'>Create, Collect, and Curate.</h3>

                        <div>
                            <Button source="https://medium.com/@PoetryDAO/introducing-poetrydao-210be1df2bb2" text="Learn more" is_external={true}/>
                            <Button source="https://discord.gg/qd4aGZufvq" text="Join the community" is_external={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempPageLayout;