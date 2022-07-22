import React from 'react'
import I1 from './images/invest-1.png'
import I2 from './images/invest-2.png'
import I3 from  './images/invest-3.png'
import I4 from './images/invest-4.png'

export default function About(){
    return(
      <div className='bg-gray-200'>
        <div className='container'>
           <div>
           <h1 className='text-center text-blue-900 underline underline-offset-8'>How Digital Marketing Services Drive Business Growth</h1>
          <br/>
          <h4 className='text-4xl text-center text-blue-900 underline underline-offset-8'>INVESTOPEDIA</h4>
           </div>
           <br/>
           <div>
            <h4 className='text-4xl text-center underline underline-offset-8'>About Us</h4>
           </div>
           <br/>
           <div>
           <p className='text-center'>
           Investopedia was founded in 1999 with the mission of simplifying financial decisions and information to give readers the confidence to manage every aspect of their financial life.

Our millions of readers come to us from all over the world and from all walks of life. Some are learning about money and investing for the first time, while others are experienced investors, business owners, professionals, financial advisors, and executives looking to improve their knowledge and skills. No matter who they are, we are here to help.
           </p>
           </div>
           <div>
            <h2 className='text-center'>Senior Editorial Team</h2>
            <div className='columns-2'>
             <div>
                <img className='ml-40 h-60' src={I1}/>
                <h4 className='text-center'>Caleb Silver</h4>
             </div>
             <br/>
             <div>
               <p>Caleb has been the Editor-in-Chief of Investopedia since 2016. He is an award-winning media executive with more than 20 years of experience in business news, digital publishing, and documentaries. Caleb sits on the Board of Governors and Executive Committee, SABEW (Society for Advancing Business Editing & Writing), and his awards include a Peabody, EPPY, SABEW Best in Business, and two Emmy nominations.</p> 
             </div>
            </div>
            <br/>
            <div className='columns-2'>
             <div>
                <img className='w-40 ml-40 h-60' src={I2}/><br></br>
                <h4 className='text-center'>Anna Attkisson</h4>
             </div>
             <br/>
             <div>
               <p>Anna Attkisson is the Senior Editorial Director for Investopedia. She oversees content strategy and operations. Anna began her career as an ASME (American Society of Magazine Editors) intern at American Homestyle & Gardening magazine. Since then, she has gone on to cover a vast range of complex topics from small business to finance. Previously, she has served as the editorial director at Business.com, Business News Daily, and Tom's IT Pro. Anna holds a B.S. in Journalism from the University of Kansas.</p> 
             </div>
            </div>
            <br/>
            <div className='columns-2'>
             <div>
                <img className='w-40 ml-40 h-60' src={I3}/><br></br>
                <h4 className='text-center'>Ben Woolsey</h4>
             </div>
             <br/>
             <div>
               <p>Ben is the Associate Editorial Director, Financial Products and Services for Investopedia and is responsible for the news, education and rating methodologies that Investopedia creates around the various products and services it reviews.</p> 
             </div>
            </div>
            <br />
            <div className='columns-2'>
             <div>
                <img className='w-40 ml-40 h-60' src={I4}/><br></br>
                <h4 className='text-center'>Julia Kagan</h4>
             </div>
             <br/>
             <div>
               <p>Julia is Senior Editor of Personal Finance at Investopedia and has been with the company since 2014. A longtime finance writer and editor for national consumer and technical audiences, she is the former editor of Consumer Reports and Psychology Today and was also Vice President and Editorial Director of Consumers Union as well as Vice President, Content for Zagat Surveys.</p> 
             </div>
            </div>
            <br/>
            <div>
                <h2 className='text-center'>Careers</h2>
                <p>Investopedia is a fast-growing company and we are always looking for motivated, multi-talented, and organized people to join our team. To learn more, please see the Dotdash Meredith Careers page which will have opportunities with both Investopedia and the rest of the Dotdash Meredith publishing family.</p>
            </div>
           </div>
        </div>
        </div>
    )
}