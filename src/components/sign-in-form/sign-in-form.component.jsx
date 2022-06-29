import { useState } from "react"
import Button from "../../routes/button/button.component"
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../services/firebase.service"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'

const initialState = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(initialState)
    
    const {
        email,
        password,
    } = formFields

    const resetForm = () => {
        setFormFields(initialState)
    }

    const handleChange = (event) => {
        const { value, name } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const logWithGoogle = async () => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocFromAuth(response.user)
        console.log(response)
    }

    const submit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetForm()
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Sign In</h1>
            <form onSubmit={submit}>
                <FormInput 
                    label="Email"
                    type="email" 
                    required 
                    name="email" 
                    onChange={handleChange} 
                    value={email} />

                <FormInput 
                    label="Password" 
                    type="password" 
                    required name="password" 
                    onChange={handleChange} 
                    value={password} />

                <div className="buttons-container">
                    <Button type="submit">
                        <span>Sign In</span>
                    </Button>

                    <Button buttonType="google" onClick={logWithGoogle}>
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm