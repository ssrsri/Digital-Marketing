import React from 'react'
import Dm01 from './images/dm-1.jpeg'
import Dm07 from './images/dm-7.jpg'
import Digital8 from  './images/digital-8.png'



export default function Featurepage1(){
    return(
        <div className='bg-gray-200'>

    <h1 className='mx-10 mt-2 text-center border-4 border-blue-900 rounded-lg'>Digital marketing solutions that eliminate your toughest internet marketing challenges. </h1>   
    <br/>
    <p className='mx-10 mt-2 text-center border-4 border-blue-900 rounded-lg'>Strike out your entire digital marketing to-do list, break through your growth plateau and see profound ROI with a single team of digital marketing specialists.</p> 
    <img className='ml-36 rounded-xl h-[500px]' src={Digital8}/>
    <br/>
    <br/>
    <div>
    <h4 className='mx-10 text-center border-4 border-blue-900 rounded-lg'>DIGITAL MARKETING SERVICES FOR HOME SERVICE COMPANIES</h4>
    <div className='flex flex-row gap-2'>
    <div>
    <p className='m-2'>Which Online Marketing Services Are Right for My Business?
    We strongly recommend investing in a comprehensive online marketing strategy that ties together a variety.</p>
    <img className='ml-32 w-96 rounded-xl' src={Dm07}/>
    </div>
    <div>
        <p className='mt-2'>
    Consumers now flip back and forth between stages in the buyer’s journey, so employing a variety of tactics like SEO, PPC, Local Services ads, email, and social media are a must.</p>
    <img className='ml-32 rounded-xl w-96' src={Dm01}/>
    </div>
    </div>
    <br></br> <br></br><br></br>
    <div className='flex justify-center'>
    <ul>
    <h6 className='font-bold'>Which services are best for your business depends on a few things</h6>

    <li className='font-normal text-center'>Your budget</li>
    <li className='font-normal text-center'>Your product/service</li>
    <li className='font-normal text-center'>Your target audience</li>
    <li className='font-normal text-center'>And many other factors</li>
    </ul>
    </div>
            </div>
            </div>
        )
    }