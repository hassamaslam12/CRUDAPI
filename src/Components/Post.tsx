import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = (props:any) => {
    const navigate =useNavigate()



    
  return (
    <div className='post'>
    <div className='postID'>POST ID : {props.id}</div>
    <div className="btn">
      <Button sx={{width:"300px"}} variant='contained' onClick={()=>navigate(`/posts/${props.id}/comments`)}>Read Comments</Button>
    </div>
  </div>
  )
}

export default Post
