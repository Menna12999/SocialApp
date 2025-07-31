'use client'


import * as React from 'react';

import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { common, red } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import { Box, Typography} from '@mui/material';
import staticImg from '../../../assets/imgs/avataaars.svg'
import Link from 'next/link';


export default function Comment({postDetails,moreComments}:postProps){
    const hasMoreComment = postDetails.comments?.length>1
     function getUserImg(imgSrc:string){
        if(!imgSrc){
          return staticImg
        }
        const pathSegments = imgSrc.split('/');
        const lastSegment = pathSegments[pathSegments.length - 1]
        if(lastSegment==='undefined'){
          return staticImg;
        }
         return imgSrc;
      }
    return(
        <Box component={'section'}>
            {moreComments&&postDetails.comments.map((comment:CommentType)=>  <Box>
             <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <Image  fill src={getUserImg(comment.commentCreator.photo)} alt={comment.commentCreator.name}/>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={comment.commentCreator.name}
                subheader={comment.commentCreator.createdAt}
              />
               <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     {postDetails.comments?.[0].content}
                      </Typography>
                    </CardContent>

             
              </Box>)}
          {!moreComments&&  <Box>
             <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <Image  fill src={getUserImg(postDetails.comments?.[0].commentCreator.photo)} alt={postDetails.comments?.[0].commentCreator.name}/>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={postDetails.comments?.[0].commentCreator.name}
                subheader={postDetails.comments?.[0].commentCreator.createdAt}
              />
               <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     {postDetails.comments?.[0].content}
                      </Typography>
                    </CardContent>

             
              </Box>}
              {hasMoreComment && !moreComments && <Link href={`/post/${postDetails.id}`}>
                     <Typography sx={{margin:'1rem' ,color:'blue',textDecoration:'underline'}}>View more comments</Typography>
                    </Link>}
              </Box>
    )
}