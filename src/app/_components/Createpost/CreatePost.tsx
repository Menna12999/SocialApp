"use client"

import React, { useRef }  from 'react';
import { Avatar, Box, Button, Divider, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import avatarImg from '@imgs/avataaars.svg'

import { Token } from '@mui/icons-material';
import Cookie  from 'js-cookie';
import axios from 'axios';

export default function CreatePost() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textRef =  useRef<HTMLInputElement>(null);
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log('Selected image:', file);
  };
  async function createPost(){
   
    console.log('333',textRef.current?.value)
    console.log('2222',fileInputRef?.current?.files[0])
    const payload = new FormData();
    payload.append('image', fileInputRef?.current?.files[0]);
    payload.append('body',textRef.current?.value)
    const {data} = await axios.post(`https://linked-posts.routemisr.com/posts`,payload,{
      headers:{
        token:Cookie.get('userToken')!,
      }
    })
    console.log(data)
  }

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 ,width:{xs:'25rem',md:'50rem'},marginBlock:'1rem',marginInline:'auto' }}>
    

      {/* Input area */}
      <Stack direction="row" spacing={2} alignItems="flex-start" marginTop='1rem'>
        <Avatar  sx={{ width: 40, height: 40 }} />
        <InputBase
          placeholder="What's on your mind?"
          inputRef={textRef}
          multiline
          fullWidth
          minRows={2}
          sx={{
            borderRadius: 2,
            px: 2,
            py: 1,
            bgcolor: '#f0f2f5',
            fontSize: 14,
          }}
        />
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Actions */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
        <Button startIcon={<ImageIcon sx={{ color: 'green' }} />} sx={{ textTransform: 'none'}} onClick={handleImageClick}>
          Photo
        </Button>
        <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={createPost}>Create Post</Button>
</Box>
    </Paper>
  );
}
