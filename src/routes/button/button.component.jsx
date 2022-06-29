import './button.styles.scss'

const buttonStyles = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonStyles[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )    
}

export default Button