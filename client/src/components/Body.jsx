import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const fetchUser = async () => {
    try {
      // console.log(user);
      // if(user === null) return;
      const res = await axios.get(`${BASE_API}/profile/view`,{
        withCredentials:true
      });
      dispatch(login(res.data))

    } catch (error) {
      if(error.status === 401){
        navigate('/login')
      }
      console.log(error);
    }
  };

  useEffect(() => {
     fetchUser()
  },[])

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
