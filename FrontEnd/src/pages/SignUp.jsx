import React from 'react';
import SwitchTheme from './theme-switch.jsx';
import Form from '../Components/Form.jsx';

const SignUp = () => {
    return (
        <div>
            <SwitchTheme />
            <Form route="/api/user/register/" method="signup" />
        </div>
    );
}

export default SignUp;