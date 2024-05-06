"use client";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Home = () => {
  const[user] = useAuthState(auth);
  const router = useRouter();
  // console.log({user})
  if(!user){
    router.push('/sign-up')
  }
  return (
    <div className="flex items-center justify-between p-5 shadow-sm">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className="w-[50px] md:w-[100px]"
      />
      <div className="flex gap-5 ">
        <button onClick={() => signOut(auth)} className="text-2xl font-extrabold text-blue-300"> Log Out </button>

      </div>
    </div>
  );
};

export default Home;
