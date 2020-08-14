import React ,{useContext,useState} from 'react';
import {TaskContext} from "../context/TaskContext";
import {MDBInput,MDBBtn} from "mdbreact";
import Task from "./Task";

const TaskList = () => {

const {globalTheme,todoList,activeItem,
    setactiveItem ,change,setchange  } = useContext(TaskContext);

const [editing, setediting] = useState(false);
//delete item 
const handleDelete=(task)=>{
    var csrftoken = getCookie('csrftoken')

    fetch(`http://127.0.0.1:8000/api/task-delete/${task.id}/`, {
      method:'DELETE',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken,
      },
    }).then((res) =>{
      setchange(!change)
    })
  }

//edit item
const startEdit=(task)=>{
  setactiveItem(task);
  setediting(true)
}

const handleChange=(e)=>{
    var name= e.target.name;
    var value= e.target.value;
    console.log("name:"+name,"value:"+value);
    setactiveItem({...activeItem,title:value})
}
//set item to complete or non complete
const  handleComplete=(task)=>{
    var crsftoken = getCookie('csrftoken');
    const url= `http://127.0.0.1:8000/api/task-update/${task.id}/ `;

    setediting(false);
    task.completed = !task.completed
    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            'X-CSRFToken':crsftoken,
        },
        body:JSON.stringify(task)
    })
    .then(res=>{
        setchange(!change);
        setactiveItem({
            id:null,
            title:"",
            completed:false
        })
    })
    .catch(err=>{
        console.log(err)
    });

}

const getCookie=(name)=>{
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

//create or update an item
const handleSubmit=(e)=>{
    e.preventDefault();
    var crsftoken = getCookie('csrftoken');
    console.log(activeItem);
    const url= editing?`http://127.0.0.1:8000/api/task-update/${activeItem.id}/ `:"http://127.0.0.1:8000/api/task-create/";

    setediting(false);

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            'X-CSRFToken':crsftoken,
        },
        body:JSON.stringify(activeItem)
    })
    .then(res=>{
        setchange(!change);
        setactiveItem({
            id:null,
            title:"",
            completed:false
        })
    })
    .catch(err=>{
        console.log(err)
    });

}


//list of tasks 
const tList = todoList.map((t,i)=>{
return(
    <div key={i} id="item" >
         <Task task={t} startEdit={()=>startEdit(t)} 
         handleDelete={()=>handleDelete(t)} handleComplete={()=>handleComplete(t)}  />
    </div>
)

}) 

return (  
        <div className='container' class={`bg-${globalTheme.text}`} id="list" >

      <div id="form-rapper" >
      <form onSubmit={(e)=>handleSubmit(e)}  >         
          <MDBInput label="task" onChange={(e)=> handleChange(e)} value={activeItem.title}  />
        <MDBBtn>Submit</MDBBtn>
                </form>
      </div>
      <div id="list" >
          {tList}
      </div>
    </div>
    );
}
 
export default TaskList;