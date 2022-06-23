import { useState } from "react"

const initialState = {
    displayName: 'spiralni',
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

    const handleChange = (event) => {
        const { value, name } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
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