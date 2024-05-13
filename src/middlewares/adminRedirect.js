import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";

const useAdminRedirect = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || (user && user.user_type !== "admin")) {
      navigate("/auth/sign-in", { replace: true });
    }
  }, [user, navigate]);
};

export default useAdminRedirect;
