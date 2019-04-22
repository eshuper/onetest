import React from 'react';
import PropTypes from 'prop-types';

const Login = ({onLogin, onLogout, text = "Hello"}) => {
    console.log("Render")
    return (
        <>
        <div>{text}</div>
        <button onClick = {onLogin}>Login</button>
        <button onClick = {onLogout}>Logout</button>
        </>
    )
}

Login.propTypes ={
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
}

// Login.defaultProps = {
//     text: 'Hello'
// }

export default React.memo(Login);