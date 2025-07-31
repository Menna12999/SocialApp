import Image from "next/image";
import styles from "./page.module.css";
import { Box} from "@mui/material";
import Grid from '@mui/material/Grid';

import { cookies } from "next/headers";
import Post from "./_components/Post/Post";
import CreatePost from "./_components/Createpost/CreatePost";

export default async function Home() {

  const myCookies = await cookies();
  async function getAllPosts(){
  const res = await  fetch(`https://linked-posts.routemisr.com/posts`,{
      headers:{
        token:myCookies.get('userToken')?.value||'',
      }
    })
    const finalRes = await res.json();
    return finalRes.posts
  }
 const allPosts :PostType[]=await getAllPosts();
  return (
  <>
    <CreatePost/>
  <Box component={'section'} sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
 
   {allPosts.map(post=><Post  postDetails={post} moreComments={false} key={post.id}/>)}

  </Box>
  </>
  );
}
