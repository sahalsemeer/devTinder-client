import React, { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { BASE_API } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("kendall@gmail.com");
  const [password, setPassword] = useState("#Uzumymw123");
  const [errorMessage,setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginBtn = async () => {
    try {
      const res = await axios.post(`${BASE_API}/login`, {
        emailId: email,
        password: password,
      },{withCredentials:true});
      dispatch(login(res.data))
      navigate('/feed')
      
      
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data)

    }
  };

  return (
    <div className="flex justify-center p-15">
      <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              value={email}
              className="input"
              placeholder="Enter Email here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              value={password}
              className="input"
              placeholder="Enter Password here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <p className="text-red-700">{errorMessage}</p>

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={handleLoginBtn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
