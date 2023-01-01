import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Modal, Input } from 'antd';
import { addEmployeeData } from './Redux/Reducer'

const Dashboard = () => {

    const SignupData = useSelector((state) => state.user.userData)
    const loginData = useSelector((state) => state.user.loginData)

   let userName = loginData[0].Signup_data.fname;
    
    const dispatch = useDispatch()

    const [employeeData, setemployeeData] = useState({
        EmployeeID: "",
        EmployeeName: ""
    });

    const [allRecord, setAllRecord] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log('from login',JSON.stringify(loginData[0].Signup_data.todo));
        console.log('is this',loginData.Signup_data);
        // if(employeeData.EmployeeID ){
            
        //  let  UserEmail = loginData[0].username;
        // console.log("login emial",loginemail)
        //     let arr = [];
        //     // console.log('All the data here Signup, login',count,loginData);
        //     console.log('what is inside',loginData)
        //    console.log(UserEmail)
        //    arr.push({UserEmail,employeeData});
        //    console.log(arr)
        // dispatch(addEmployeeData(arr))
        // // console.log
        // // AddNewUser();
        // console.log("inside this")
        // }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const Setting = (event) => {
        const { name, value } = event.target
        setemployeeData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const AddNewUser = () => {

        setAllRecord([...allRecord, employeeData]);
    }


    return (
        <>

            <b> Welcome{userName}</b>
            <br />
            {/* Your User ID is {loginData[0].username} */}
            {/* Your Todo is {count[0].todo} */}

            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Add Employee Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <h4>Add Employee Details</h4> */}

                <Form.Item
                    label="Employee ID" name="EmployeeID"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input name="EmployeeID" onChange={Setting} value={employeeData.EmployeeID} />
                </Form.Item>

                <Form.Item
                    label=" Employee Name" name="EmployeeName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Employee Name!',
                        },
                    ]}
                >
                    <Input name="EmployeeName" onChange={Setting} value={employeeData.EmployeeName} />
                </Form.Item>

            </Modal>

            <div id="managerTable">
                <table>
                    <thead>
                        <tr>
                            <th >Employee ID</th>
                            <th>Employee Name</th>
                        </tr>
                    </thead>
                    {allRecord.map((v, i) => {
                        return (<tr key={i}>
                            <td>{v.EmployeeID}</td>
                            <td>{v.EmployeeName}</td>

                        </tr>)
                    })}
                </table>
            </div>

        </>
    )
}

export default Dashboard
