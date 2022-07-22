import React, { useState } from 'react'
import { useFormik } from 'formik'
import {Link,useNavigate} from "react-router-dom"

export default function Signup(){
    let navigate= useNavigate();
    const formik=useFormik({
        initialValues:{
        firstname:'',
        lastname:'',
        email:'',
        mobile:'',
        password:'',
        cnpassword:''
    },
    onsubmit:(values)=>{
      values.preventDefault();
      console.log('Form Values', values)
    //   console.log('form data submitted')
      formik("")
    },
    validate:(values)=>{
        let errors={}
        if(!values.firstname)
        {
            errors.firstname='Please enter the firstname'
        }
        else if(!values.firstname.match(/^[a-zA-Z]+$/))
        {
            errors.firstname='Name should be in alphabets only'
        }
        if(!values.lastname)
        {
            errors.lastname='Please enter the lastname'
        }
        else if(!values.lastname.match(/^[a-zA-Z]+$/))
        {
            errors.lastname='Name should be in alphabets only'
        }
        if(!values.email)
        {
            errors.email='Please enter the email'
        }
        else if(!values.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
        {
            errors.email='email should contain uppercase,lowecase,numbers and special characters'
        }
        if(!values.mobile)
        {
            errors.mobile='Please enter mobile number'
        }
        // else if(!values.mobile.match(/^(?=.*?[0-9]).{10,}$/))
        // {
        //     errors.mobile='Number should be in numericals only'
        // }
        if(!values.password)
        {
            errors.password='Please enter the password'
        }
        else if(!values.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/))
        {
            errors.password='password should contain atleast min 8 Chars[abc..,ABC..,123..,@#$..]'
        }
        if(!values.cnpassword)
        {
            errors.cnpassword='Please Re-enter the password'
        }
        else if(values.password===values.cnpassword)
        {
            errors.cnpassword='password matched'
        }
        else{
            errors.cnpassword='password and confirm password should be the same'
        }
        return errors;
        
    }
        });
        let data = {
            fName:formik.values.firstname,
            Lname:formik.values.lastname,
            email:formik.values.email,
            mobile:formik.values.mobile,
            password:formik.values.password,
            uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100),
            loginStatus:false
        };
        const onSubmit = (e)=>{
            e.preventDefault();
            if(formik.values.firstname && formik.values.lastname && formik.values.email && formik.values.password && formik.values.cnpassword && (formik.values.password === formik.values.cnpassword))
            {
                let lsData = localStorage.getItem("userDataList");
                let parseData;
                  if(lsData){
                      parseData = JSON.parse(lsData);
                  }else{
                      parseData = [];
                  }
                localStorage.setItem("userDataList", JSON.stringify([data,...parseData]));
        
                  let formTags = document.forms[0];
                  formTags.firstname.value = "";
                  formTags.lastname.value = "";
                  formTags.email.value = "";
                  formTags.mobile.value = "";
                  formTags.password.value = "";  
                  formTags.cnpassword.value = "";          
        
                  formik.handleSubmit();
    
                  navigate("/signin")
                  
    
            }
            else
            {
                alert("please fill out the fields")
            }
           
        };
     return(
        <div className='container'>
            <form autoComplete='off' onSubmit={onSubmit}>
            <center>
       <div className='columns-2'>
        <div>
            <label className='block mr-80'>FIRSTNAME</label><br/>
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="text" value={formik.values.firstname} name="firstname" id="firstname" placeholder='Please enter your name' onChange={formik.handleChange} /><br/>
            <span>{formik.errors.firstname ? <div className='ml-20 text-left text-red-600 text-1xl'>{formik.errors.firstname}</div> : null}</span>
           <br/>
            <label className='block mr-80'>LASTNAME</label><br />
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="text" value={formik.values.lastname} name="lastname" id="lastname" placeholder='Please enter your name' onChange={formik.handleChange} />
            <span>{formik.errors.lastname ? <div className='ml-20 text-left text-red-600 text-1xl'>{formik.errors.lastname}</div> : null}</span>
        </div>
       </div>
       <br/>
       <div className='columns-2'>
        <div>
            <label className='block ml-5 mr-96'>EMAIL</label><br />
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="email" value={formik.values.email} name="email" id="email" placeholder='Please enter your email' onChange={formik.handleChange} />
            <br/>
            <span>{formik.errors.email ? <div className='ml-20 text-left text-red-600 text-1xl'>{formik.errors.email}</div> : null}</span>
            <br/>
            <label className='block mr-72 ml-15'>PHONE NUMBER</label><br/>
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="number" value={formik.values.mobile} name="mobile" id="mobile" placeholder='Please enter mobile number' onChange={formik.handleChange}/>
            <br/>
            <span>{formik.errors.mobile ? <div className='ml-20 text-left text-red-600 text-1xl'>{formik.errors.mobile}</div> : null}</span>
        </div>
       </div>
       <br/>
       <div className='columns-2'>
        <div>
            <label className='block mr-80'>PASSWORD</label><br/>
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="password" value={formik.values.password} name="password" id="password" placeholder='Please enter your password' onChange={formik.handleChange}/><br/>
            <span>{formik.errors.password ? <div className='ml-20 text-left text-red-600 text-1xl'>{formik.errors.password}</div> : null}</span>
            <br/>
            <label className='block mr-64'>CONFIRM PASSWORD</label><br />
            <input className='h-10 text-center rounded-md w-96 ring ring-grey-300' type="password" value={formik.values.cnpassword} name="cnpassword" id="cnpassword" placeholder='Please re-enter your password' onChange={formik.handleChange}/><br/>
            <span>{formik.errors.cnpassword ? <div className='ml-20 text-left' style={formik.values.cnpassword ? {color:"green"} : {color:"red"}}> &nbsp;{formik.errors.cnpassword}</div> : null }</span>
        </div>
       </div>
       <br/>
       <button type="submit" className='h-10 text-white bg-blue-900 border-2 rounded-lg w-52 hover:border-blue-400'>Signup</button>
       <br/>
       <p>If you already have an account please <Link className='no-underline' to="/signin"><b>Signin</b></Link></p>
        </center>
        </form>
        </div>
        
    )
}