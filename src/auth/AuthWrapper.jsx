import { createContext, useContext, useEffect, useState } from "react";
import {
  RenderNavigation,
  RenderView,
} from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  useEffect(() => {
    const localData = localStorage.getItem("formData");
    if (localData) {
      login(JSON.parse(localData).userName, JSON.parse(localData).password);
    }
  }, []);

  const login = (userName, password) => {
    // Make a call to the authentication API to check the username and password

    return new Promise((resolve, reject) => {
      if (password === "1234") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password");
      }
    });
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
    localStorage.setItem(
      "formData",
      JSON.stringify({ userName: "", password: "" })
    );
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <RenderNavigation />
      <RenderView />
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
