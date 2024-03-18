import React from 'react'
import '../styles/Registerstyles.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';



const Login = () => {
    const onfinishHandler = (values) => {
        console.log(values)
    }

    return (
        <div className="form-container">
            <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
                <h3 className='text-center'>Login Form</h3>
                <Form.Item label="Email" name="email">
                    <input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <input type="password" required />
                </Form.Item>
                <Link to="/register" className="ms-3">
                    Not a user register here
                </Link>

                <button className="btn btn-primary" type="submit" onClick={"../pages/Home"}>Login</button>
                <button className="btn" onClick={() => window.location.href = 'http://localhost:3000/'}>Back</button>


            </Form>

        </div>
    )
}


export default Login

/*import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Registerstyles.css';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Here, you can add logic to handle login
    };

    return (
        <div className="form-container">
            <Form layout="vertical" onFinish={onFinish} className="register-form">
                <h3 className="text-center">Login Form</h3>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link to="/register" className="register-link">
                        Not a user? Register here
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;*/
