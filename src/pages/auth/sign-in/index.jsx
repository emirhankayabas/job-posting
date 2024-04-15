import AuthHeader from "~/components/Header/AuthHeader";
import AuthHeadline from "~/components/Header/AuthHeadline";
import SignInForm from "./components/form";
import AuthFooter from "~/components/Footer/AuthFooter";

export default function SignIn() {
    return (
        <div className="container mx-auto h-full">
            <AuthHeader />

            <div className="w-[420px] pt-9 mx-auto">
                <AuthHeadline
                    title="Giriş yap"
                    description="E-posta adresi ya da Facebook, Google hesaplarından biriyle giriş yap."
                />

                <SignInForm />

                <AuthFooter
                    authType="sign-in"
                />
            </div>
        </div>
    )
}