import Post from '@/app/_components/Post/Post'
import Box from '@mui/material/Box'
import { cookies } from 'next/headers'
import React from 'react'

export default async function page(props:{}) {


  console.log(props.params.id)

  const obj = await cookies()

 async function getSinglePost(){
   const res = await fetch(`https://linked-posts.routemisr.com/posts/${props.params.id}`,{
      headers:{
        token:obj.get('userToken')?.value!,
      }
    })
    const finalRes = await res.json()
    return finalRes.post;
  }
  const singlePost:PostType = await getSinglePost()
  return (
    <Box component={'section'} sx={{width:'50%',mx:'auto'}}>
    <Post postDetails={singlePost} moreComments/>
    </Box>
  )
}
