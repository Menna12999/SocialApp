'use client'

import { myStore } from "@/lib/redux/reduxStore"
import { useSelector } from "react-redux"
import { StoreType } from "@/lib/redux/reduxStore"

export default function Title(){
  const res =  useSelector((store:StoreType)=>store.authReducer)

  console.log('res',res)

    return(
        <>
             <div>user name :{res.token}</div>
        </>
    )
}