import { useState } from "react"
import Button from "../../routes/button/button.component"
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../services/firebase.service"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(initialState)
    
    const {
        displayName,
        email,
        password,
        confirmPassword
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

    const signUp = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            window.alert("your passwords do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            console.log(user);

            await createUserDocFromAuth(user, {
                displayName: displayName
            })

            resetForm()
        } catch(err) {
            if (err.code) {
                window.alert(err.code)
            }
            
            console.error(err)
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Sign up with your email and password</h1>
            <form onSubmit={signUp}>
                <FormInput 
                    label="Display name"
                    type="text" required name="displayName" onChange={handleChange} value={displayName} />

                <FormInput 
                    label="Email"
                    type="email" required name="email" onChange={handleChange} value={email} />

                <FormInput label="Password" type="password" required name="password" onChange={handleChange} value={password} />

                <FormInput label="Confirm password" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />

                <Button buttonType="google" type="submit">
                    <span>Sign up</span>
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm