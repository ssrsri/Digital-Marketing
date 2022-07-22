import React from 'react';
import './home.css'
import {Link} from 'react-router-dom'
import Cards from './Cards'
// import Dm7 from './images/dm-7.jpg' 

export default function Home(){
    return(
        <>
        <div className='w-full h-auto bgImage'>
            <br/>
            <p className='text-4xl text-center text-white'>Digital marketing is the component of marketing that uses the Internet and online based digital technologies</p>
            <br/>
            <div className='columns-1'>
             <div className='text-2xl text-center text-white border rounded-lg'>
             Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.
             </div>
             <br/>
            </div>
        <Cards />
        <br/>
        </div>
        </>)
}