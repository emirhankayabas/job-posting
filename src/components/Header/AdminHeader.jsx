import { Link } from "react-router-dom";
import Logo from "~/components/Logo";
import useAuth from "~/hooks/useAuth";

import Dropdown from "~/components/Dropdown";
import { IoLogOutOutline } from "react-icons/io5";

export default function AdminHeader() {
    const { user, logout } = useAuth();

    return (
        <header className="w-full h-14 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
            <Link>
                <Logo variant="small" />
            </Link>

            <div>
                <Dropdown
                    buttonText={user?.user_email}
                    items={[
                        { text: "Çıkış yap", onClick: () => logout(), icon: IoLogOutOutline },
                    ]}
                />
            </div>
        </header>
    )
}
