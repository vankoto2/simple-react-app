import { AuthData } from "../../auth/AuthWrapper";

export const Account = () => {
  const { user } = AuthData();

  return (
    <div className="page">
      <h2 className="font-bold text-[60px] text-white text-center pt-10">
        Your Account
      </h2>
      <p className="xl:px-44 text-white text-[19px] mt-10 mx-auto w-11/12 text-center pt-10">
        Username: {user.name}
      </p>
    </div>
  );
};

export default Account;
