import React,{useState, useEffect} from 'react' 
import logo from './assets/logo.jpg'
function Navbar(props) {

  function handle_home(e){
    props.setpage("home")
}
function handle_clients(e){
  props.setpage("clients")
}

function handle_new_user(e){
  props.setpage("newUser")
}
function handle_change_password(e){
  props.setpage("changePassword")
}


    return(
      <nav className='navbar'>
        <img className='logo' src={logo}alt="React Image" />
        <button className='navbar_button' onClick={handle_home}>Home</button>
        <button className='navbar_button' onClick={handle_clients}>Clients</button>
        <button className='navbar_button' onClick={handle_new_user}>New User</button>
        <button className='navbar_button' onClick={handle_change_password}>Change Password</button>
      </nav>
    )
  
}

export default Navbar;