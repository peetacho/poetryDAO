import React from 'react';
import Logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Icons } from '../../constants/constants';
import Divider from '../Divider';

const Footer = ({
    ...otherProps
}) => {

    return (
        <footer className='bg-background'>
            <div className=' w-11/12 mx-auto py-14 px-2.5'>
                <Divider/>
                <div className='flex flex-row justify-between px-6 py-8'>
                    <div className='text-left text-primary w-1/2'>
                        <img src= {Logo} alt="Logo" className=' max-h-20'/>
                        <p className='md:text-lg my-3'>PoetryDAO is the world's first DAO building the home for poetry in web3 in supporting the Creator's Economy.</p>
                        <p className='md:text-lg mt-3'>Create, Collect and Curate with us.</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center justify-end my-3'>
                            {Icons.map((i) => (
                                    <li className="list-none md:ml-5">
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
                        <p className='text-right text-primary md:text-lg mt-3'>contact us at help@poetrydao.com</p>
                    </div>
                </div>
                <Divider/>
                <p className='text-left text-primary md:text-lg my-5'>© {new Date().getFullYear()} PoetryDAO. All Right's Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;