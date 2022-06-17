import { createUserDocFromAuth, signInWithGooglePopup } from "../../services/firebase.service"

const SignIn = () => {

    const logWithGoogle = async () => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocFromAuth(response.user)
        console.log(response)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logWithGoogle}>
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn