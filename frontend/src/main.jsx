import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import App from './App'
import NewPost from './components/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css'

const router = createBrowserRouter([ // an array that takes an object that has one route and compent that should be loaded  
   {path: '/', 
    element: <RootLayout/>, 
    children: [
      {path:'/', element: <App/> }, //parent and children routes are combined & must not clash
      {path:'/create-post', element: <NewPost/>} // if the user tries to access a route that is not defined, they will see a message that says "Page not found"
    ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
)
