import React from 'react'
import Digital1 from  './images/digital-1.png'
import Digital2 from  './images/digital-2.png'

export default function Featurepage2(){
    return(
      <div className='bg-gray-200'>
        <div className='container'>
            <div>
         <h4 className='text-center text-blue-900'>YOUR WEBSITE IS YOUR #1 SALES & MARKETING TOOL</h4>
         <br/>
         <p className='text-center text-black-900'>Your website is the number one sales and marketing tool at your disposal, if it attracts visitors and can be found online. How does your website measure up?</p>
         </div>
          <br/>
          <div>
          <img src={Digital1} />
          </div>
          <br/>
          <div>
          <h4 className='text-center text-blue-900'>Which Online Marketing Services Are Right for My Business?</h4>
          <br/>
          <p className='text-center text-black-900'>We strongly recommend investing in a comprehensive online marketing strategy that ties together a variety of home service digital marketing services. Consumers now flip back and forth between stages in the buyer’s journey, so employing a variety of tactics like SEO, PPC, Local Services ads, email, and social media are a must.</p>
          </div> 
          <br/>
          <div className='ml-48'>
            <img src={Digital2} className='h-[400px] ml-32' />
          </div>
          <div>
            <h4 className='text-center text-blue-900'>Which services are best for your business depends on a few things:</h4>
            <ul>
                <li className='text-center'>Your budget</li>
                <li className='text-center'>Your goals</li>
                <li className='text-center'>Your product/service</li>
                <li className='text-center'>Your target audience</li>
                <li className='text-center'>And many other factors</li>

            </ul>
          </div>
        </div>
        </div>
    )
}