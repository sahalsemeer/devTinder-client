import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../store/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((state) => state.feed)
  console.log(feed?.feed?.[0]?.firstName);
  
  // console.log(feed?.feed[0]?.firstName);
  const getFeed = async () => {
    const res = await axios.get(`${BASE_API}/user/feed`,{withCredentials:true})
    dispatch(addFeed(res.data))
    
  }

  useEffect(() => {
    getFeed()
  },[])

  
  return (
    <UserCard />
  )
}

export default Feed