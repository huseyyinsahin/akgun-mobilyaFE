import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return user?.isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRouter;
