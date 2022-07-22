import React from 'react';
import { Link } from 'react-router-dom';
export default function Header()
{

    return(
        <>
        <div>
        <h2 className='mb-4 text-5xl text-center text-blue-900 duration-300 ease-in hover:font-bold ' style={{fontFamily:"font-sans" }}>DIGITAL MARKETING</h2>
         
            {/* <ul className='flex h-10 gap-20 text-2xl bg-blue-300'>
                <li className='text-black duration-300 ease-in hover:font-bold'><Link to='/feature1'>Feature1</Link></li>
                <li className='text-black duration-300 ease-in hover:font-bold'><Link to='/feature2'>Feature2</Link></li>
                <li className='text-black duration-300 ease-in hover:font-bold'><Link to='/feature3'>Feature3</Link></li>
                <li className='text-black duration-300 ease-in hover:font-bold'><Link to='/about'>About</Link></li>
                <li className='text-black duration-300 ease-in hover:font-bold'><Link to='/contact'>Contact Us</Link></li>


            </ul> */}
        </div>

        </>
    )
}