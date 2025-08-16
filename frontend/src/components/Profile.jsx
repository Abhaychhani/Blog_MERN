import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Profile({ logout }) {
  const [showProfleOptions, setShowProfileOptions] = useState(false);
  const {user} = useContext(AuthContext);
  return (
    <>
      <div
        className="bg-white h-9 aspect-square rounded-full overflow-hidden"
        onClick={() => {
          setShowProfileOptions(!showProfleOptions);
        }}
      >
        <img src={"profile.jpg"} className="cursor-pointer object-cover h-full w-full"/>

        {showProfleOptions ? (
          <div className="absolute top-16 right-4 bg-white p-2 rounded">
            <ul className="text-black">
                <li>
                    <Link to={`/${user.username}`}>
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
