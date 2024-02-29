import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" },
    () => {
      const localData = localStorage.getItem("formData");
      return localData ? JSON.parse(localData) : { userName: "", password: "" };
    }
  );

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-[60px] text-white text-center">
        Login page
      </h2>
      <div className="mx-auto laptop:w-1/2 pt-5">
        <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
          <input
            value={formData.userName}
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
            className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Name
          </label>
        </div>
        <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
          <input
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
            className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Password
          </label>
        </div>
        <div className="grid pt-5 flex items-center justify-center">
          <button
            className="outline outline-offset-[-3px] outline-[#1C4875]  bg-[#1C4875]/70 w-44 h-14 hover:text-white py-2 text-white text-center text-[20px] inset-x-2/4 place-self-start rounded-full flex items-center justify-center"
            onClick={doLogin}
          >
            Log in
          </button>
        </div>
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>
    </div>
  );
};

export default Login;
