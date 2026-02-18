import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Posts, {loader as postsLoader} from './components/routes/Posts';
import NewPost, {action as newPostAction} from './components/routes/NewPost';
import PostDetails, {loader as postDetailsLoader } from './components/routes/PostDetails';
import RootLayout from './components/routes/RootLayout';
import './index.css'

const router = createBrowserRouter([ // an array that takes an object that has one route and compent that should be loaded  
  { path: '/', 
    element: <RootLayout/>, 
    children: [
    {
        path:'/', 
      element: <Posts/>, 
      loader: postsLoader, // will execute function when the user acesses element router 
      children:[
        {path:'/create-post', element: <NewPost/>, action: newPostAction }, // if the user tries to access a route that is not defined, they will see a message that says "Page not found"
        {path:'/:id', element:<PostDetails/>, loader: postDetailsLoader }// dynamic route with a dynamic route param
      ],
      },
    ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
)
