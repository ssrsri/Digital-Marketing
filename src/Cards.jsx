import React from 'react'
import {Link} from 'react-router-dom'
import Dm8 from'./images/dm-8.png'
import Dm2 from './images/dm-4.png'
import Dm3 from './images/dm-5.png'
import Dm4 from './images/dm-6.jpg'


export default function Cards(){
    return(
        <>
        
       <div>
       <div className='flex h-48 gap-4 mx-2 mt-10 columns-4'>
         <div className='bg-white rounded-lg border-5 border-slate-100 hover:border-blue-400' style={{width:"350px",height:"300px"}}>
         <Link className='no-underline' to="/featurepage1"><img alt='img' src={Dm4}  className="w-48 h-48" style={{height:"170px",width:"350px"}}/>
         <br/>
         <h5 className="ml-8 font-extrabold text-black">How digital marketing eliminates toughest marketing solutions</h5>
         </Link>
         </div>
         <div className='bg-white rounded-lg border-5 border-slate-100 hover:border-blue-400' style={{width:"350px",height:"300px"}}>
         <Link className='no-underline' to="/featurepage2"><img alt='img' src={Dm2}  className="h-48" style={{height:"170px",width:"350px"}}/>
         <br/>
         <h5 className="ml-8 font-extrabold text-black">Which Online Marketing Services Are Right for My Business?</h5><br/>
         </Link>
         </div>
         <div className='bg-white rounded-lg border-5 border-slate-100 hover:border-blue-400' style={{width:"350px",height:"300px"}}>
         <Link className='no-underline' to="/featurepage3"><img alt='img' src={Dm3}  className="h-48"/>
         <br/>
         <h5 className="ml-8 mr-2 font-extrabold text-black">Why Clients Say Globallogic Is the Best Digital Marketing Company</h5><br/>
         </Link>
         </div>
         <div className='bg-white rounded-lg border-5 border-slate-100 hover:border-blue-400' style={{width:"350px",height:"300px"}}>
         <Link className='no-underline' to="/featurepage4"><img alt='img' src={Dm8}  className="h-48" style={{height:"170px",width:"350px"}}/>
         <br/>
         <h5 className="ml-8 font-extrabold text-black no">What is digital marketing and discover the benefits of the digital marketing</h5><br/>
         </Link>
         </div>
        </div>
        <center>
            <Link to="/contact"><button className='h-10 mt-10 text-white bg-blue-900 border-4 rounded-lg w-52 border-slate-100 hover:border-blue-400'>CONTACT US</button>
         </Link>
        </center>

       </div>

        </>
    )
}