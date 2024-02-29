import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { navigation } from "./CustomNavigation";

export const RenderNavigation = () => {
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
          
      <div className="">
        <Link className="text-[#A0AEB6] hover:text-white focus:text-white text-16px col-span-2" to={r.path}>{r.name}</Link>
      </div>
    );
  };
  return (
    <div className="menu">
      {navigation.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="menuItem">
          <Link  className="text-[#A0AEB6] hover:text-white focus:text-white text-16px col-span-2"  to={"#"} onClick={logout}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="menuItem">
          <Link  className="text-[#A0AEB6] hover:text-white focus:text-white text-16px col-span-2"  to={"login"}>Log in</Link>
        </div>
      )}
    </div>
  );
};

export const RenderView = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {navigation.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};
