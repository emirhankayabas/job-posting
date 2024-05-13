import { useState } from "react"
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import classNames from "classnames";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export default function SideBar({ navLinks }) {
    const [menuOpen, setMenuOpen] = useState(true);
    const hidden = !menuOpen ? "hidden" : "";

    return (
        <aside
            className={classNames({
                "employer-sidebar h-full p-2 border-r border-neutral-700 transition-all": true,
                "w-[65px]": !menuOpen,
                "w-72": menuOpen,
            })}
        >

            <button
                className="w-full h-12 flex items-center rounded-lg text-left hover:bg-neutral-800 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </span>
                <div className={hidden}>
                    {menuOpen ? "Daralt" : "Genişlet"}
                </div>
            </button>

            <nav className="flex flex-col gap-y-1 mt-2">
                {navLinks.map((link, index) => (
                    <>
                        <NavLink
                            key={index}
                            to={link.path}
                            className="w-full h-12 flex items-center rounded-lg text-left hover:bg-neutral-800 transition-colors text-sm"
                        >
                            <span className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                {link.icon}
                            </span>
                            <div className={hidden}>
                                {link.title}
                            </div>
                        </NavLink>
                    </>
                ))}
            </nav>
        </aside>
    )
}

SideBar.propTypes = {
    navLinks: propTypes.array.isRequired
}