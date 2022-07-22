import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Contact from './Contact';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Featurepage1 from './Featurepage1';
import Featurepage2 from './Featurepage2';
import Featurepage3 from  './Featurepage3'
import Featurepage4 from './Featurepage4';
import Signup from './Signup'
import Signin from './Signin';
import Navbar from './Navbar';
import Thankyou from './Thankyou';

function App() {
  const [userFound, setUserFound] = useState(false);

  const signinPageCall = (userUniqueID)=>{
    // setUserFound(value);
    
    let lsData = localStorage.getItem("userDataList");
    let parseData;
      if(lsData){
          parseData = JSON.parse(lsData);
      }else{
          parseData = [];
      }

      for(let i=0; i<parseData.length; i++){
        if(parseData[i].uniqueId === userUniqueID){
          // console.log("Login Status "+ parseData[i].loginStatus);
          setUserFound(parseData[i].signinStatus);
          // console.log(userFound);
        }
      }
  }
  return (<BrowserRouter>
  <br/>
  <Header />
    <Navbar/>
    <Routes>
    <Route path="/" element={<Signin/>} />
    <Route path="/signin" element={<Signin signinPageCall={signinPageCall}/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/featurepage1' element={<Featurepage1/>} />
      <Route path='/featurepage2' element={<Featurepage2/>} />
      <Route path='/featurepage3' element={<Featurepage3/>} />
      <Route path='/featurepage4' element={<Featurepage4/>} />

      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/thankyou" element={<Thankyou/>}/>
      



    </Routes>
    <Footer />
    </BrowserRouter>);
}

export default App;
