import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);

  return user.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
