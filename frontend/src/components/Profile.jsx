import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile({ logout }) {
  const [showProfleOptions, setShowProfileOptions] = useState(false);
  return (
    <>
      <div
        className="bg-white h-9 aspect-square rounded-full overflow-hidden"
        onClick={() => {
          setShowProfileOptions(!showProfleOptions);
        }}
      >
        <img src={"vite.svg"} className="cursor-pointer object-cover h-full w-full"/>

        {showProfleOptions ? (
          <div className="absolute top-16 right-4 bg-white p-2 rounded">
            <ul className="text-black">
                <li>
                    <Link to="/dashboard/create-post">
                    Dashboard
                    </Link>
                </li>
                <li>Settings</li>
            </ul>
            <button
              className="bg-red-600 text-white px-4 cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Profile;
