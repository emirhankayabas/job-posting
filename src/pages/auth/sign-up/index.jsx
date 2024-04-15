import AuthHeader from "~/components/Header/AuthHeader";
import AuthHeadline from "~/components/Header/AuthHeadline";
import SignUpForm from "./components/form";
import AuthFooter from "~/components/Footer/AuthFooter";

export default function SignUp() {
    return (
        <div className="container mx-auto h-full">
            <AuthHeader />

            <div className="w-[420px] pt-9 mx-auto">
                <AuthHeadline
                    title="Kayıt ol"
                    description="E-posta adresi ya da Facebook, Google hesaplarından biriyle kayıt ol."
                />

                <SignUpForm />

                <AuthFooter
                    authType="sign-up"
                />
            </div>
        </div>
    )
}