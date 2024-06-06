import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePostComments = () => {
    const params = useParams();
    console.log(params);
    
    const [inpData,setInpData]=useState<any>({})

    const [apiData,setApiData] =useState<any>([]);

    const getApiData = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postID}/comments`)
        .then(res=>{
            console.log(res.data);
            
            setApiData([...res.data])
        })
        .catch(err => console.log(err));
    }

    useEffect(getApiData,[])

    const inpChange =(e:any)=>{
        console.log(e);
        setInpData({...inpData,[e.target.id]:e.target.value});
    }
        console.log(inpData);
        
    const postApiData = () => {
        axios.post(`https://jsonplaceholder.typicode.com/comments`,{
            ...inpData,postId:params.postID
        }).then(res=>{
            console.log(res.data);
            alert("posted comment succensfully")
            
        })
    }

    const putApiData = (id:number) => {
        const name = prompt("Enter your Name: ")
        const email = prompt("Enter your E-mail: ")
        const body = prompt("Enter your new comment: ")

        const temp ={
            postId: params.postID,
            id:id,
            name:name,
            email:email,
            body:body
        }

        axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`,temp)
        .then(res=>{
            console.log(res.data);
            alert("Edit Success")
            
        })
    }

    const deleteApiData = (id:number) => {
        axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`).then((response) => {
            console.log(response);
            alert('Delete Success')
            
        })
    }

  return (<>
    {apiData && <>
        <div className="sp">

            <div className='spIMG'>
                <h1>
                Post ID : {params.postID}
                </h1>
            </div>
            <div className="heading">
                <h1>Comments</h1>
            </div>
                {apiData && apiData.map((e:any,i:any)=><div className="comment" key={i}>

<div className='flex aic'>
    <div className="id">
        {e.id}
    </div>
    <div className="name">
        <h1>
        {e.name}
        </h1>
    </div>
    <div className="email ">
        {e.email}
    </div>
</div>
<div className="commentBody">
    {e.body}
</div>
<div className='btns'>
        <Button sx={{marginRight:2}} variant='contained' onClick={()=>deleteApiData(e.id)}>DELETE</Button>
        <Button variant='contained' onClick={()=>putApiData(e.id)}>Edit</Button>
</div>
</div>)}
        <div>
            <h1>Add new Comment: </h1>
        <TextField sx={{margin:2}}  id="name" label="Your name" variant="standard" onChange={(e)=>inpChange(e)}/>
        <TextField sx={{margin:2}}  id="email" label="Your E-mail" variant="standard" onChange={(e)=>inpChange(e)}/><br />
        <TextField fullWidth sx={{marginBottom:2}} id="body" label="New comment" variant="standard" onChange={(e)=>inpChange(e)}/>
        <Button sx={{margin:2}}  variant='contained' onClick={()=>postApiData()}>Add New Comment</Button>
        </div>
        </div>

        </>}
  </>
  )
}

export default SinglePostComments
