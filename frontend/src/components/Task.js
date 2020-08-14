import React from 'react';
import {MDBBtn} from "mdbreact";


const Task = ({task ,startEdit,handleDelete,handleComplete }) => {
    return (
        <React.Fragment id="item" >
          {task.completed? 
          <strike onClick={handleComplete} >  {task.title} </strike>
          :<span style={{flex:7}} onClick={handleComplete}  >{task.title}</span>}

        <MDBBtn class="btn btn-warning " onClick={startEdit} >Edit</MDBBtn>
        <MDBBtn class="btn btn-danger" onClick={handleDelete} >X</MDBBtn>
        </React.Fragment>

      );
}
 
export default Task;