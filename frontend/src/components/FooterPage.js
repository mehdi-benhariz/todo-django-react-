import React,{useContext} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {TaskContext} from "../context/TaskContext";


const FooterPage = () => {
const {globalTheme} = useContext(TaskContext)

  return (
  
    <MDBFooter color="blue accent-5" className="font-small pt-4 mt-4" style={{ bottom:"0" ,width:"100%"}} >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" class={`${globalTheme.text}-text `}>SOFTWARE ENGINEER </h5>
            <p class={`${globalTheme.text}-text `} >
  i'm an ambitous and hardworker tunisian software engineer aiming to enhance my level,non-stop learner!
            </p>
          </MDBCol>
          <MDBCol md="6">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid class={`${globalTheme.text}-text `}>
          <div class={`${globalTheme.text}-text `} >
          &copy; {new Date().getFullYear()} Copyright:
           <a target="_blank" rel="noopener noreferrer" class={`${globalTheme.text}-text `}
           href="https://www.linkedin.com/in/mehdi-ben-hariz-8752481a4/">Mehdi Ben Hariz </a>
          </div>

        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;