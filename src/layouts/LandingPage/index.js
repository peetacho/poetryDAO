import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Hero from './../../assets/hero.png'
import { Link } from 'react-router-dom';

const LandingPageLayout = ({
    ...otherProps
}) => {
    return (
        <div className='min-h-full bg-background'>
            <div className='h-screen flex flex-col'>
                <Header/>

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
                        <h1 className='md:text-8xl mt-6 mb-12'>Empowering the next generation of poets.</h1>
                        <h3 className='md:text-3xl my-2'>Welcome to the home of Poetry in Web3.</h3>
                        <h3 className='md:text-3xl my-2'>Create, Collect, and Curate.</h3>

                        <Link
                            to={{ pathname: 'https://google.com' }} 
                            target="_blank"
                        >
                            <button className="bg-transparent text-primary py-2 px-20 rounded-full border-2 border-primary my-4
                                hover:text-background hover:border-background hover:bg-primary mb-32 transition duration-300
                            "
                            >
                                Join
                            </button>
                        </Link>

                        <div class='icon-scroll'></div>
                    </div>
                </div>
            </div>

            <div className="
                 w-9/12 mx-auto
            ">
                {otherProps.children}
            </div>
            
            <Footer/>
        </div>
    );
};

export default LandingPageLayout;