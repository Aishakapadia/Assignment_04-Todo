import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {  addSignupUser } from './Redux/Reducer'
// import Dashboard from './Dashboard';


const Signup = () => {
    const onFinish = (values) => {
        // console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    const [signedIn, setsignedIn] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        todo : []
    });

    const count = useSelector((state) => state.user.userData)
    console.log(count)
    const dispatch = useDispatch()

    const Setting = (event) => {
        const { name, value } = event.target
        setsignedIn((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    return (
        <>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 12,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="First Name"
                    name="fname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First Name!',
                        },
                    ]}
                >
                    <Input name="fname" onChange={Setting} value={signedIn.fname} />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Last Name!',
                        },
                    ]}
                >
                    <Input name="lname" onChange={Setting} value={signedIn.lname} />
                </Form.Item>

                <Form.Item
                    label="Username" name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    {/* <Input name="username" onChange={signedIn.username(event.target.value)} /> */}
                    <Input name="username" onChange={Setting} value={signedIn.username} />
                </Form.Item>

                <Form.Item
                    label="Password" name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password name="password" onChange={Setting} value={signedIn.password} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit"
                        onClick={() => dispatch(addSignupUser(signedIn))}>
                        Submit
                </Button>
                    <br />
                    <br />
                    <Link to="/login">Login</Link>
                </Form.Item>
            </Form>
        </>

    )
}


export default Signup




