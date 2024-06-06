import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Table from './Table'
import './Apicall.css'
import Post from './Post'

const Apicall = () => {
    const [userData,setUserData] = useState<any>([])
    const [print,setPrint] = useState<any>("");
    const [posts,setPosts] = useState<any>([])

    const getApiData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>{console.log(res)
          const uniquePosts = res.data.reduce((acc: any[], obj: { postId: any }) => {
            if (!acc.includes(obj.postId)) {
              acc.push(obj.postId);
            }
            return acc;
          }, []);
          setPosts([...uniquePosts]);
            setUserData([...res.data]);
            setPrint("");
        })
        .catch(err => console.error(err));
        if(userData){

         
          
        }
    }


    const postApiData = ()=>{
      axios.post(`https://jsonplaceholder.typicode.com/comments`,{
        userId:1,
        title:`new Title`,
        completed:true
      }).then(res=>{
        console.log(res.data);
        setPrint("Post Success")
        
      }).catch(err=>{
        console.log(err);
        
      })
    }
    const putApiData = ()=>{
      axios.put(`https://jsonplaceholder.typicode.com/comments/2`,{
        userId:1,
        title:`New Title`,
        completed:false
      }).then(res=>{
        console.log(res.data);
        setPrint("Put Success")
        
      }).catch(err=>{
        console.log(err);
        
      })
    }

    const deleteApiData = ()=>{
      axios.delete(`https://jsonplaceholder.typicode.com/comments/1`)
      .then(res=>{
        console.log(res.data);
        setPrint('Delete Succes')
      }).catch(err=>{

        console.log(err);
        
      })
    }


    return (
    <>
      <Box>
        <h1>Api handling for comments</h1>

        <Button sx={{margin:1,textTransform:"capitalize"}} onClick={getApiData} variant="contained">Get Data</Button>
      </Box>
        
      {/* {userData[0] && <Table dataList={userData} 
        colList={[
            {type:"text", key:"postId",label:"Post ID"},
            {type:"text", key:"id",label:"User ID"},
            {type:"text", key:"name",label:"User Name"},
            {type:"text", key:"email",label:"E-mail"},
            {type:"text", key:"body",label:"Comment"},
            {type:"button",key:"", label:"",displayField:(row:any)=><Button variant="contained" onClick={()=>{
                console.log(row);
                
            }}>Delete</Button>}
            ]}/>} */}
            <div className="flex">

           {posts && posts.map((e:any,i:number)=><Post id={e}/>)}
            </div>


    </>
  )
}

export default Apicall
