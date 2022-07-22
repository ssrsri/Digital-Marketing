import React from 'react'
import Digital5 from  './images/digital-5.jpg'
import Digital6 from './images/digital-6.png'
import Digital7 from './images/digital-7.png'

export default function Featurepage4() {
    return (
        <div className='bg-gray-200'>
        <div className='container'>
            <div className='text-center text-blue-900'>
                <h2>Discover the benefits of digital marketing for your business, from increasing customer loyalty to optimizing conversions.</h2>
            <br/>
            <img className='max-w-2xl ml-60' src={Digital5}/>
            </div>
            <br/>
            <div>
            <h2 className='text-center'>What is Digital Marketing?</h2>
            <br/>
             <p>In a nutshell, digital marketing refers to marketing through an electronic device or the internet. It’s another word for internet marketing.</p>
             <br/>
             <img className='ml-80' src={Digital6} />
            </div>
            <br/>
            <div>
                <p>In all these billing models, the marketer only pays when a customer clicks, views, or completes a purchase. But to enjoy this benefit of digital marketing, you need to be strategic. If you target the right audience, you won’t have to spend too much money to convince them. So, before you start spending your hard-earned money, think about your digital marketing strategy and who you’re trying to reach.</p><br></br>

                <p>Chief marketing officers (CMOs) are getting smarter with their marketing budget. Instead of wasting money on expensive TV ads, they choose social media, search, online video, and other online media channels to run ads at a cheaper rate.</p><br></br>

                <img className='ml-48' src={Digital7} /><br/>
            </div>
            </div>
        </div>
    )
}