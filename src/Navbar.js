import React from "react";
import { Link} from "react-router-dom";
// import "./Navbar.css";

export const Navbar = (props) => {
  
  // window.onload = ()=>{
  //   let navTag = document.getElementsByClassName("navBar")[0];
  //   if(!props.userFound){
  //     navTag.style.visibility = "hidden";
  //   }else{
  //     navTag.style.visibility = "visible";
  //   }
  // };
  let logoutBtn = (e)=>{
    document.getElementById("navBar").style.display = "none";
    // console.log(e.target);
  };
  return (
    <div id="navBarDiv">
      <div id="navBarContainer" className="flex items-center bg-blue-900 justify-right bg-slate-250" style={{height:"45px",display:"flex",justifyContent:"right",paddingRight:"1rem"}}>
        <nav  id="navBar" className="flex justify-end navBar">
          <Link
            to="/home"
             className="px-3 py-2 font-medium text-white no-underline rounded-lg hover:bg-violet-600"
          >
            Home
          </Link>
          <Link
            to="/about"
             className="px-3 py-2 font-medium text-white no-underline rounded-lg hover:bg-violet-600"
          >
            About
          </Link>
          <Link
            to="/contact"
             className="px-3 py-2 font-medium text-white no-underline rounded-lg hover:bg-violet-600"
          >
            Contact
          </Link>
          <Link
           onClick={logoutBtn}
            to="/signin"
             className="px-3 py-2 font-medium text-white no-underline rounded-lg logoutButton hover:bg-violet-600"
          >
            Logout
          </Link>          
        </nav>
      </div>
      <div></div>
    </div>
  );
};
export default Navbar;