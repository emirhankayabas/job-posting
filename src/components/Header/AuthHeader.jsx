import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function AuthHeader() {
    return (
        <header className="w-full py-6">
            <Link to="/">
                <Logo />
            </Link>
        </header>
    )
}
