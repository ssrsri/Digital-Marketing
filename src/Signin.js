import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css';

export default function Signin(props) {
  const [userName,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  let navigate= useNavigate();

// onSubmit localStorage Part
const onSubmit = (event) => {
  event.preventDefault();


  let lsData = localStorage.getItem("userDataList");
  let parseData;
    if(lsData){
        parseData = JSON.parse(lsData);
    }else{
        parseData = [];
    }
    if(parseData!== null && !parseData.length>0){
    }else{
      let i = 0;
      let userUniqueID = "";
        try{
          while(i <= parseData.length){
            // console.log(parseData[i].email);
              if(parseData[i].email === userName && parseData[i].password === userPassword){
                parseData[i].signinStatus = true;
                userUniqueID = parseData[i].uniqueId;
                localStorage.setItem("userDataList",JSON.stringify(parseData));
    
                // props.history.push('/home');
                  navigate('/home');
                  document.getElementById("navBar").style.display = "flex";
                  props.loginPageCall(userUniqueID);
                break;
              }else{
                document.getElementById("navBar").style.display = "none";
              }
            i += 1;
          }
        }catch(err){
          // console.log("error occured: ",err);
          document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
          setTimeout(()=>{
              document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
          },2500);
        }
    }
};
    return(
    <div className="container pt-10 ml-20">
        <center>
    <h2 className="mb-5 text-3xl text-blue-700">Signin</h2>
    <form autoComplete="off" onSubmit={onSubmit}>
      <label className="block ml-8 mr-96" htmlFor="userName">Email</label>
      <br />
      <input type="text" name="userName" id="userName" className="h-10 text-center rounded-md w-96 ring ring-grey-300" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter Your Name"/>
      <div className="text-red-500">
      </div>
      <br />
      <label className="block mr-96 ml-14">Password</label>
      <br />
      <input type="password" className="h-10 text-center rounded-md w-96 ring ring-grey-300" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} /> <br/>
      <button type="submit" className="h-10 mt-10 text-white bg-blue-900 border-2 rounded-lg w-52 hover:border-blue-400">Signin</button>
    </form>
    <br />
    <div className="errMessage">
      <p>Incorrect credentials, Please check and try again!</p>
    </div>
    <br/>
    <p style={{marginBottom:"7rem"}} className="text-1xl">If You don't have an account&nbsp;<Link className="text-blue-500 no-underline" to="/signup"><b>Signup</b></Link></p>
    </center>
  </div>
    )
}