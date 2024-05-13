import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";
import useAuthRedirect from "~/middlewares/authRedirect";

import EmployersForm from "./components/form";
import EmployersLayout from "~/layouts/employers";

export default function EmployerPosting() {
    useAuthRedirect();

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (user.company_id == null) {
            navigate("/employers/company-setup", { replace: true });
        }
    }, [user, navigate])

    return (
        <EmployersLayout>
            <EmployersForm />
        </EmployersLayout>
    )
}