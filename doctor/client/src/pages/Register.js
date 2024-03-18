import React from 'react';
import '../styles/Registerstyles.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Home from "../pages/Home";

const Register = () => {

    const onfinishHandler = (values) => {
        console.log(values)
    }
    return (
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
                    <h3 className='text-center'>Register Form</h3>
                    <Form.Item label="Name" name="name">
                        <input type="text" required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <input type="password" required />
                    </Form.Item>
                    <Link to="/login" className="ms-3">
                        Already user login here
                    </Link>
                    <button className=" btn btn-primary" onClick={"http://localhost:3000/#home"}>Register</button>
                    <button className="btn" onClick={() => window.location.href = 'http://localhost:3000/'}>Back</button>

                </Form>

            </div>
        </>
    );
};

export default Register