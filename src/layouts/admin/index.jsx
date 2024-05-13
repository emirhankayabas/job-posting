import propTypes from "prop-types";
import useAdminRedirect from "~/middlewares/adminRedirect";

import AdminHeader from "~/components/Header/AdminHeader";
import SideBar from "~/components/SideBar";

import { IoMdTime } from "react-icons/io";

export default function AdminLayout({ children }) {
    useAdminRedirect();

    const navLinks = ([
        {
            title: "Onay Bekleyen İş İlanları",
            icon: <IoMdTime size={20} />,
            path: "/admin",
        },
        {
            title: "Onay Bekleyen Şirketler",
            icon: <IoMdTime size={20} />,
            path: "/admin/companies",
        },
    ])

    return (
        <div className="w-full h-full flex">
            <SideBar navLinks={navLinks} />
            <main className="flex-1">
                <AdminHeader />
                {children}
            </main>
        </div>
    )
}

AdminLayout.propTypes = {
    children: propTypes.node.isRequired
}