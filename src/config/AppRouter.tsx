import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apicall from '../Components/Apicall'
import SinglePostComments from '../Components/SinglePostComments'

const AppRouter = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element=<Apicall/> />
            <Route path='/posts/:postID/comments' element=<SinglePostComments/> />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
