import React from 'react';
import Nav from "./components/Nav";
import FooterPage from "./components/FooterPage";
import TaskContextProvider from "./context/TaskContext";
import TaskList from "./components/TaskList"

function App() {
  return (

    <TaskContextProvider >
<Nav />
<TaskList /> 
<FooterPage />
    </TaskContextProvider>
   
  );
}

export default App;
