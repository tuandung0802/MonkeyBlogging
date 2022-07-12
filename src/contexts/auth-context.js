import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(
        "🚀 ~ file: auth-context.js ~ line 12 ~ onAuthStateChanged ~ user",
        user
      );
      setUserInfo(user);
    });
  }, []);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAutg must be used AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
