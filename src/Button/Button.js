import React from 'react';
import myAlert from '~/alert'
const Button = () => {
    return (
        <div>
            <button onClick={myAlert}>Click me</button>
        </div>
    );
};

export default Button;