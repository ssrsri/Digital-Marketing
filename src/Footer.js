import React from 'react'
// import './'

export default function Footer(){
    return(
        <div className='h-20 text-center text-white bg-black'>
            <br/>
            Copyright © 2022 Digital Marketing | All rights reserved. 
            <a href="https://www.instagram.com/"><span className='ml-2 text-pink-600 rounded-md hover:text-purple-700'><i class="bi bi-instagram"></i></span></a>
            <a href="https://www.facebook.com/login/"><span className='ml-2 text-blue-900 rounded-md hover:text-purple-700'><i class="bi bi-facebook"></i></span></a>
            <a href="https://www.whatsapp.com/"><span className='ml-2 text-green-600 rounded-md hover:text-purple-700'><i class="bi bi-whatsapp"></i></span></a>
            <a href="https://twitter.com/"><span className='ml-2 text-blue-600 rounded-md hover:text-purple-700'><i class="bi bi-twitter"></i></span></a>


        </div>
    )
}