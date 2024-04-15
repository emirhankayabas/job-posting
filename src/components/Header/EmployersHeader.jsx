import { Link } from "react-router-dom";
import Logo from "~/components/Logo";
import useAuth from "~/hooks/useAuth";
import Dropdown from "../Dropdown";

import { IoSettingsOutline, IoLogOutOutline, IoSearchOutline } from "react-icons/io5";

export default function EmployersHeader() {
    const { user, logout } = useAuth();

    return (
        <header className="w-full h-14 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
            <Link to="/employers">
                <Logo variant="small" />
            </Link>

            <div>
                <Dropdown
                    buttonText={user?.user_email}
                    items={[
                        { text: "Hesap ayarları", to: "/employers/account", icon: IoSettingsOutline },
                        { text: "İş arayanlar için", to: "/", icon: IoSearchOutline, target: "_blank" },
                        { text: "Çıkış yap", onClick: () => logout(), icon: IoLogOutOutline },
                    ]}
                />
            </div>
        </header>
    )
}
