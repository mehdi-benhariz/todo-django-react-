import React,{createContext,useState,useEffect } from 'react';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    
    const [theme, setTheme] = useState('light');
    const [change, setchange] = useState(false);

    const toggleTheme=()=> theme === 'light'?setTheme('dark'):setTheme('light');
    const lightTheme = {
        body: 'white',
        text: 'black',
      }
      
    const darkTheme = {
        body: 'dark',
        text: 'white',
      }
      const globalTheme= theme ==="light"?lightTheme :darkTheme;

const [todoList, settodoList] = useState([]);
const [activeItem, setactiveItem] = useState({
    id:null,
    title:"",
    completed:false

});
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/task-list/").then(x=>x.json())
    .then(result=>{
        settodoList(result);
    } )    

}, [change])
    
       
    return (  
    <TaskContext.Provider value={{toggleTheme,globalTheme,todoList,
    activeItem, setactiveItem,settodoList,change,setchange   }} >
        {props.children}
    </TaskContext.Provider>
    );
}
 
export default TaskContextProvider;