import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Contact (){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[mobile,setMobile]=useState("");   
    const[address,setAddress]=useState("");    
    const[message,setMessage]=useState("");   
    
    let navigate=useNavigate();

    const onformSubmit=(e)=>{
        e.preventDefault();

        document.getElementById('name').oninvalid=(e)=>{
        e.target.setCustomValidity("Incorrect name,Please enter a valid name!")
        }
        navigate("/thankyou")

        const data={
            name:'name',
            email:'email',
            password:'password',
            mobile:'mobile',
            address:'address',
            message:'message',
            uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100)
        }

        let lsData=localStorage.getItem("contactUsDataList")

        let parseData;
        if(lsData)
        {
            parseData=JSON.parse(lsData)
        }
        else
        {
            parseData=[];
        }
        localStorage.setItem("contactUsDataList",JSON.stringify([data,...parseData]));

        let formTag = document.forms[0];
        formTag.name.value = "";
        formTag.email.value = "";
        formTag.password.value = "";
        formTag.mobile.value = "";
        formTag.address.value = "";
        formTag.message.value = ""
    }

    return(
        <div className='bg-gray-200'>
        <center>
        <div className='container'>
            <form onSubmit={onformSubmit}>
            <div><br/>
            <label className='block mr-80' htmlFor='name'>USERNAME</label><br/>
            <input pattern="[A-Za-z]{3,10}" name="name" id="name" className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="text" onChange={(e)=>{setName(e.target.value)}} required/>
            </div>
            <br/>
            <div>
            <label className='block ml-5 mr-96' htmlFor='email'>EMAIL</label><br/>
            <input name="email" id="email" className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            {/* <br></br> */}
            {/* <div> */}
            {/* <label className='block' htmlFor='password'>PASSWORD</label><br/><br/> */}
            {/* <input name="password" id="password" className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="password" onChange={(e)=>{setPassword(e.target.value)}}/> */}
            {/* </div> */}
            <br/>
            <div>
            <label className='block ml-8 mr-96' htmlFor='mobile'>MOBILE</label><br/>
            <input name="mobile" id="mobile" className='h-10 text-center rounded-md form-input w-96 ring ring-grey-300' type="number" onChange={(e)=>{setMobile(e.target.value)}} required/>
            </div>
            {/* <br></br> */}
            {/* <div> */}
            {/* <label className='block' htmlFor='address'>ADDRESS</label><br/><br/> */}
            {/* <input name="address" id="address" className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="number" onChange={(e)=>{setAddress(e.target.value)}}/> */}
            {/* </div> */}
            <br/>
            <div>
            <label className='block ml-12 mr-96' htmlFor='message'>MESSAGE</label><br/>
            <textarea name="message" id="message" style={{textIndent:"10px",overflowY:"scroll"}} className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="number" onChange={(e)=>{setMessage(e.target.value)}} required/>
            </div>
            <br/>
            <div>
                <button type='submit'  className='h-10 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-52'>SUBMIT</button>
            </div><br />
            </form>
        </div>
        </center>
        </div>
    )
}