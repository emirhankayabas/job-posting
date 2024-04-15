import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "~/hooks/useAuth";

import EmployersLayout from "~/layouts/employers";
import CompanySetupHeadline from "./components/headline";
import CompanySetupForm from "./components/form";

export default function CompanySetup() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const width = localStorage.getItem("width") || "max-w-3xl";

    useEffect(() => {
        if (user.company_id) {
            navigate("/employers/posting", { replace: true });
        }
    }, [user, navigate])

    return (
        <EmployersLayout>
            <div className={`${width} mx-auto h-full pt-10`}>
                <CompanySetupHeadline
                    title="İşveren hesabı oluşturun"
                    description="İşveren hesabınızı oluşturarak iş ilanlarınızı yayınlayabilir, işe alım sürecinizi yönetebilirsiniz."
                />

                <CompanySetupForm />
            </div>
        </EmployersLayout>
    )
}
