import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin } from "~/services";

import Text from "../Text";
import Button from "../Form/Button";
import useAuth from "~/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AuthFooter({ authType }) {
    const [url, setUrl] = useState("")
    const [text, setText] = useState("")
    const { login } = useAuth();
    const navigate = useNavigate();

    const loginGoogle = useGoogleLogin({
        onSuccess: tokenResponse => {
            googleLogin({ access_token: tokenResponse.access_token }).then(response => {
                console.log(response)
                if (response.status == "OK") {
                    login(response.user);
                    navigate("/", { replace: true });
                }
            })
        },
    });

    useEffect(() => {
        if (authType === "sign-in") {
            setUrl("/auth/sign-up")
            setText("Hesap oluştur")
        } else {
            setUrl("/auth/sign-in")
            setText("Giriş yap")
        }
    }, [authType])

    return (
        <footer className="mt-8">
            <div className="text-center">
                <Text>
                    {authType === "sign-in" ? "Hesabınız yok mu?" : "Zaten bir hesabınız var mı?"}{" "}
                    <Link
                        to={url}
                        className="text-white underline"
                    >
                        {text}
                    </Link>
                </Text>
            </div>

            <div className="w-full flex flex-col mt-8 gap-y-2">
                <Button variant="google" type="button" onClick={() => loginGoogle()}>Google ile devam et</Button>
                <Button variant="facebook" type="button">Facebook ile devam et</Button>
            </div>
        </footer>
    )
}

AuthFooter.propTypes = {
    authType: propTypes.oneOf(["sign-in", "sign-up"]).isRequired,
}