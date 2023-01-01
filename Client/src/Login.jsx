import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addLoginUser } from './Redux/Reducer'
// import  { Redirect } from 'react-router-dom'

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [logedIn, setlogedIn] = useState({
        username: "",
        password: ""
    });

   
    const SignupData = useSelector((state) => state.user.userData)
    let Loginusername = logedIn.username;
    let signupEmail = SignupData.find(value => value.username== Loginusername)

    const Setting = (event) => {
        const { name, value } = event.target
        setlogedIn((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const dashbaordRedirect = useSelector((state) => state.user.redirectToDashboard);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(()=>{
        if(dashbaordRedirect){
            navigate("/dashboard");
        }
    },[dashbaordRedirect])


    // const example=<Link to ="/dashboard"></Link>
    const checkLoginDetails = () => {

        dispatch(addLoginUser(logedIn));
        console.log("Should we redirect to Dashboard?" + dashbaordRedirect)
        console.log("Signup here",signupEmail);
        console.log(SignupData)
        // if(dashbaordRedirect == true){
        //     navigate("/dashboard");
        //     console.log("Inside dashboard")
        // }
    }

    return (

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
                label="Username" name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name="username" onChange={Setting} value={logedIn.username} />
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
                <Input.Password name="password" onChange={Setting} value={logedIn.password} />
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
                <Button type="primary" 
                    onClick={checkLoginDetails}>
                    Login
                </Button>

                {/* <Link type="button" to="/dashboard" onClick={checkLoginDetails} className="myButton">Login</Link> */}
                <br />
                <br />
                <Link to="/">Signup</Link>

            </Form.Item>
        </Form>

    )
}


export default  Login
