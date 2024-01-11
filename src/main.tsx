import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/container/App.tsx'
import './index.css'
import ListContainer from './components/container/ListContainer.tsx'
import AddTodoContainer from './components/container/AddTodoContainer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/*<App /> */} 
     <AddTodoContainer />
    <ListContainer />
  </React.StrictMode>,
)
