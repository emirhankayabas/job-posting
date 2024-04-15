import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, update } from "~/stores/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  const handleUpdate = (userData) => {
    dispatch(update(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    update: handleUpdate,
  };
};

export default useAuth;
