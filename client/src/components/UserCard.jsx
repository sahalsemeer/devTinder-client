import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;
  const { firstName, lastName, about, photoURL } = user;

  return (
    <div className="flex justify-center mt-6 p-2">
      <div className="card bg-base-300 w-70 shadow-sm">
        <figure>
          <img src={photoURL} alt="Profile Photo" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-secondary mr-2">Interested</button>
            <button className="btn btn-primary mr-2">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
