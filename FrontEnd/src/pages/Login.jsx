import React from 'react';
import SwitchTheme from '../Components/theme-switch.jsx';
import Form from '../Components/Form.jsx';

const Login = () => {
    return (
        <div>
            <SwitchTheme />
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login;