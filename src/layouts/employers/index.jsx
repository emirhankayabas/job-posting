import propTypes from "prop-types";
import useAuthRedirect from "~/middlewares/authRedirect";

import EmployersHeader from "~/components/Header/EmployersHeader";
import SideBar from "~/components/SideBar";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";

export default function EmployersLayout({ children }) {
    useAuthRedirect();

    const navLinks = ([
        {
            title: "İş İlanları",
            icon: <MdOutlineWorkOutline size={20} />,
            path: "/employers",
        },
        {
            title: "İlan oluştur",
            icon: <AiOutlinePlus size={22} />,
            path: "/employers/posting",
        },
        {
            title: "Adaylar",
            icon: <PiUsersThreeBold size={20} />,
            path: "/employers/candidates",
        }
    ])

    return (
        <div className="w-full h-full flex">
            <SideBar navLinks={navLinks} />
            <main className="flex-1">
                <EmployersHeader />
                {children}
            </main>
        </div>
    )
}

EmployersLayout.propTypes = {
    children: propTypes.node.isRequired
}