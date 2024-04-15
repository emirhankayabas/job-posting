import propTypes from "prop-types";
import EmployersHeader from "~/components/Header/EmployersHeader";
import SideBar from "~/components/SideBar";

export default function EmployersLayout({ children }) {
    return (
        <div className="w-full h-full flex">
            <SideBar />
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