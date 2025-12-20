import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_API } from "../utils/constants";
import { logout } from "../store/userSlice";
import { removeFeed } from "../store/feedSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_API}/logout`, {}, { withCredentials: true });
      dispatch(logout())
      dispatch(removeFeed())
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user.user);
  // console.log(user.user.photoURL);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate('/feed')}>DevsHub</a>
      </div>
      <div className="flex gap-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user.user && (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.user.photoURL}
                />
              </div>
            )}
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to={'/connections'}>
              Connections
              </Link>
            </li>
            <li>
              <Link to={'/requests'}>
              Requests
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
