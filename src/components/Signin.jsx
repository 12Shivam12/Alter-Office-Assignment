
import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import image from '../assets/image.png';
import AdvancedComponent from '../components/Comment';

const SignIn = () => {
  const [user, setUser] = useState(null); 

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); 
      console.log(result.user); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <AdvancedComponent user={user} />
      ) : (
        <div className="flex items-center justify-center gap-2 text-white" onClick={signInWithGoogle}>
          <img className="w-[50px] bg-transparent" src={image} alt="" />
          <button className="font-medium text-2xl p-3 bg-orange-500 rounded hover:bg-orange-600">
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
