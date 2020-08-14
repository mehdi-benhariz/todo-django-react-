import React,{useContext} from 'react';
import {MDBNavbar,
    MDBNavbarNav,MDBNavItem ,MDBFormInline,MDBBtn } from "mdbreact";
import {TaskContext} from "../context/TaskContext";


const Nav = () => {
    const {toggleTheme,globalTheme} = useContext(TaskContext);

    return ( 
        <MDBNavbar color="blue accent-5"  style={{position: "fixed", top:"0" ,width:"100%",  }} >
          <MDBNavbarNav left>
          <MDBFormInline>
          <h4><strong class={`${globalTheme.text}-text `} >Todo </strong></h4>
          </MDBFormInline>

          </MDBNavbarNav>
      <MDBNavbarNav right>
     <MDBBtn onClick={()=>toggleTheme()} color={globalTheme.body==="white"?"info":"elegant"} >Change Theme</MDBBtn>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
     );
}
 
export default Nav;