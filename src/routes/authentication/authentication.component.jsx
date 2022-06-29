import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-fom/sign-up-form.component"
import { createUserDocFromAuth, signInWithGooglePopup } from "../../services/firebase.service"
import Button from "../button/button.component"

const Authentication = () => {
    return (
        <div>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication