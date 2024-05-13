import { Link } from "react-router-dom";
import useAuth from "~/hooks/useAuth";

import Logo from "~/components/Logo";
import Dropdown from "../Dropdown";

import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="w-full h-16 flex items-center justify-between px-4 border-b border-neutral-700">
            <Link to="/">
                <Logo />
            </Link>

            <nav className="flex items-center gap-x-4">
                {!user && (
                    <Link to="/auth/sign-in" className="flex items-center text-sm px-3 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap">Giriş yap</Link>
                )}

                {user && (
                    <Dropdown
                        buttonText={<FaUserLarge />}
                        items={[
                            { text: user?.user_email },
                            { text: "Profil", to: "/profile", icon: FaRegFileAlt },
                            { text: "Hesap ayarları", to: "/account", icon: IoSettingsOutline },
                            { text: "Çıkış yap", onClick: () => logout(), icon: IoLogOutOutline },
                        ]} />
                )}

                <Link to="/employers" className="flex items-center text-sm px-3 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap">İşverenler / İş İlanı Ver</Link>
            </nav>
        </header>
    )
}
