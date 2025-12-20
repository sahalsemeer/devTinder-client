import axios from "axios";
import React, { useEffect } from "react";
import { BASE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../store/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);
  const getRequests = async () => {
    const res = await axios.get(BASE_API + "/user/requests/received", {
      withCredentials: true,
    });
   
    dispatch(addRequest(res.data.data));
  };
  useEffect(() => {
    getRequests();
  }, []);

  if (!requests?.requests) return null;
  if (requests?.requests?.length === 0) return <h1>No Request Found.</h1>;
  return (
    <div>
      <h1 className="text-center mt-6 font-extrabold text-xl">Requests</h1>
      <div className="flex justify-center">
        <div className="mt-6">
          {requests.requests.map((user) => {
            const { firstName, lastName, about, photoURL, _id } = user.FromUserId;
            return (
              <div
                key={_id}
                className="card w-200 bg-base-300 card-xs shadow-sm mt-2 "
              >
                <div className="card-body px-4 py-3">
                  <div className="flex justify-between items-center">
                    {/* AVATAR */}
                    <div className="avatar">
                      <div className="ring-primary ring-offset-base-100 w-18 rounded-full ring-2 ring-offset-2">
                        <img src={photoURL} alt="profile" />
                      </div>
                    </div>

                    {/* USER INFO */}
                    <div>
                      <p className="text-lg font-bold">
                        {firstName + " " + lastName}
                      </p>
                      <p>{about}</p>
                    </div>

                    {/* OPTIONS */}
                    <div className="flex gap-4">
                    <button className="btn btn-active btn-success">Accept</button>
                    <button className="btn btn-active btn-error">Reject</button>
                    </div>
                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Requests;
