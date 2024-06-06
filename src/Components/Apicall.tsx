import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Table from './Table'


const Apicall = () => {
    const [userData,setUserData] = useState<any>([])
    const [print,setPrint] = useState<any>("")

    const getApiData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{console.log(res)
            setUserData([...res.data]);
            setPrint("")
        })
        .catch(err => console.error(err))
    }


    const postApiData = ()=>{
      axios.post(`https://jsonplaceholder.typicode.com/todos`,{
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
      axios.put(`https://jsonplaceholder.typicode.com/todos/1`,{
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
      axios.delete(`https://jsonplaceholder.typicode.com/todos/1`)
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
        <h1>Api handling</h1>

        <Button sx={{margin:1,textTransform:"capitalize"}} onClick={getApiData} variant="contained">Get Data</Button>
        <Button onClick={postApiData} sx={{margin:1,textTransform:"capitalize"}}  variant="contained">post Data</Button>
        <Button onClick={putApiData} sx={{margin:1,textTransform:"capitalize"}}  variant="contained">put Data</Button>
        <Button onClick={deleteApiData} sx={{margin:1,textTransform:"capitalize"}}  variant="contained">delete Data</Button>
      </Box>
      {print && <div>{print}</div>}

      {userData[0] && <Table dataList={userData} 
        colList={[
            {type:"text", key:"id",label:"User ID"},
            {type:"text", key:"name",label:"User Name"},
            {type:"text", key:"email",label:"E-mail"},
            {type:"text", key:"phone",label:"Phone Number"},
            {type:"text", key:"website",label:"Website"},
            {type:"button",key:"", label:"",displayField:(row:any)=><Button variant="contained" onClick={()=>{
                console.log(row);
                
            }}>Delete</Button>}
            ]}/>}
    </>
  )
}

export default Apicall
