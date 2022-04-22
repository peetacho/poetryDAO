import React from 'react';
import TempHeader from './../../components/TempHeader';
import Footer from './../../components/Footer';
import Hero from './../../assets/hero.png'
import Hand from './../../assets/new_icons/landing page - hand.png'
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { Icons } from '../../constants/constants';

const TempPageLayout = ({
    ...otherProps
}) => {
    return (
        <div className='min-h-full bg-background'>
            <div className='h-screen flex flex-col'>
                <TempHeader/>

                <div
                    className="
                        relative flex h-full
                        bg-cover bg-center bg-no-repeat 
                        px-12
                    "
                    // style={{
                    //     backgroundImage: `url(${Hero})`
                    // }}
                >
                    <div
                        className="
                            relative z-10 text-xl text-left text-primary max-w-5xl lg:mt-16
                        "
                    >
                        <h1 className='text-4xl mb-4 md:text-8xl mt-6 lg:mb-16'>Empowering the next generation of poets.</h1>
                        <h3 className='md:text-3xl md:mt-2'>Welcome to the home of Poetry in Web3.</h3>
                        <h3 className='md:text-3xl md:mb-2'>Support the Creator's Economy.</h3>
                        <h3 className='my-2 md:text-3xl md:my-6'>Create. Collect. Curate.</h3>

                        <div>
                            <Button source="https://medium.com/@PoetryDAO/introducing-poetrydao-210be1df2bb2" text="Learn more" is_external={true}/>
                            <Button source="https://discord.gg/qd4aGZufvq" text="Join the community" is_external={true}/>
                        </div>
                        <h3 className='my-2 text-base md:mt-16 invisible lg:visible'>for inquiries reach us at: contact @poetrydao.ink</h3>
                    </div>
                    <div className='absolute bottom-0 right-0 xl:max-w-4xl max-w-lg opacity-90 xl:top-0'>
                        <img src={Hand} alt='HAND'/>
                    </div>
                </div>
                <div className='lg:hidden bg-background'>
                    <div className='flex flex-col items-center justify-center my-10'>
                        <div className='flex flex-row'>
                            {Icons.map((i) => (
                                    <li className="list-none lg:ml-5">
                                        <Link
                                            className="flex w-full text-lg cursor-default"
                                            to={{ pathname: i.pathname }} 
                                            target="_blank"
                                        >
                                            <button className="inline-flex items-center justify-center w-10 h-10 ml-2 transition-colors duration-150 bg-transparent hover:opacity-75">
                                                <img src={i.icon} alt= {i.alt}/>
                                            </button>
                                        </Link>
                                    </li>
                                ))}
                        </div>
                        <h3 className='my-2 text-xs'>for inquiries reach us at: contact@poetrydao.ink</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempPageLayout;