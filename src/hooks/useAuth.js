import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser, update } from "~/stores/authSlice";
import useCompany from "./useCompany";
import useJob from "./useJob";
import useSearch from "./useSearch";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { resetCompany } = useCompany();
  const { resetJob } = useJob();
  const { resetSearchHistory } = useSearch();

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  const handleUpdate = (userData) => {
    dispatch(update(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
    resetCompany();
    resetJob();
    resetSearchHistory();
  };

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    update: handleUpdate,
  };
};

export default useAuth;
