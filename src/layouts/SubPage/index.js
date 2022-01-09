import React from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { Link } from 'react-router-dom';

const SubPageLayout = ({
    title,
    description1,
    description2,
    source,
    bg,
    ...otherProps
}) => {
    return (
        <div className='min-h-full bg-background font-body'>
            <div className='h-screen flex flex-col'>
                <Header/>

                <div
                    className="
                        relative flex items-center h-full
                        bg-cover bg-center bg-no-repeat 
                        px-12
                    "
                    style={{
                        backgroundImage: `url(${bg})`
                    }}
                >
                    <div
                        className="
                            relative z-10 text-xl text-left text-primary max-w-5xl
                        "
                    >
                        <h1 className='md:text-8xl mt-6 mb-12'>{title}</h1>
                        <h3 className='md:text-3xl my-2'>{description1}</h3>
                        <h3 className='md:text-3xl my-4'>{description2}</h3>

                        <Link
                            to={{ pathname: source }} 
                            target="_blank"
                        >
                            <button className="bg-transparent text-primary py-2 px-20 rounded-full border-2 border-primary my-4
                                hover:text-background hover:border-background hover:bg-primary mb-3 transition duration-300
                                "
                                >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SubPageLayout;