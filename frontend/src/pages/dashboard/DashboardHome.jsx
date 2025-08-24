import { useAuth } from "../../context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth();
  const { fullName, email, username } = user;
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-slate-100">
      <h1 className="text-center text-3xl font-bold capitalize">
        Profile
      </h1>
      <div className="bg-[#1E293B] px-4 pt-8 pb-4 rounded-sm mt-4 shadow-2xl flex flex-col  justify-center gap-8">
        <div className="flex items-center w-full justify-start gap-8">
          <img src="/default_user.jpg" className="h-24 rounded-full" />
          <div>
            <h1 className="capitalize text-xl font-bold">{fullName}</h1>
            <h3 className="text-sm text-gray-300">{username}</h3>
            <p className="text-sm text-gray-300">{email}</p>
          </div>
        </div>
        <button className="bg-indigo-600 rounded-md px-8 py-2 cursor-pointer transition active:scale-95">Edit Profile</button>
      </div>
    </div>
  );
}
