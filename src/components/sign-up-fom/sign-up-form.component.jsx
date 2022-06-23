import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../services/firebase.service"

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={signUp}>
                <label>Display name</label>
                <input type="text" required name="displayName" onChange={handleChange} value={displayName} />

                <label>Email</label>
                <input type="email" required name="email" onChange={handleChange} value={email} />

                <label>Password</label>
                <input type="password" required name="password" onChange={handleChange} value={password} />

                <label>Confirm password</label>
                <input type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm