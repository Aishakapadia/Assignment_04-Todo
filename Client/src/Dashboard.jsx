import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Modal, Input } from 'antd';
import { addEmployeeData } from './Redux/Reducer'

const Dashboard = () => {

    const loginData = useSelector((state) => state.user.loginData)
    const TodoData = useSelector((state) => state.user.userData)

   let userName = loginData[0].Signup_data.fname;
   let username = loginData[0].Signup_data.username;
   let table = [TodoData]
    
    const dispatch = useDispatch()

    const [employeeData, setemployeeData] = useState({
        
        TodoList: ""
    });

    const [allRecord, setAllRecord] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log('from login',JSON.stringify(loginData[0].Signup_data.todo));
        console.log('is this',loginData.Signup_data);
        // console.log("todolsot",todolist)
        if(employeeData.TodoList ){
            
        dispatch(addEmployeeData(employeeData))
        console.log('todo herrrrrrrrrrrrrrr',JSON.stringify(TodoData))
        AddNewUser();
        }
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
                username,
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


            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Add Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <h4>Add Employee Details</h4> */}


                <Form.Item
                    label=" Todo Task" name="EmployeeName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Employee Name!',
                        },
                    ]}
                >
                    <Input name="TodoList" onChange={Setting} value={employeeData.TodoList} />
                </Form.Item>

            </Modal>
                {/* <div>{table}</div> */}
            <div id="managerTable">
                <table>
                        <tr>
                            <th >Todo List</th>
                        </tr>
                    {table.map((v, i) => {
                        return (<tr key={i}>
                            <li>{v.todo}<br/></li>
                            </tr> )
                    })}
                </table>
            </div>
            {/* <div>
                {}
            </div> */}

            {/* <div id="managerTable">
                <table>
                        <tr>
                            <th >Todo List</th>
                        </tr>
                    {table.map((v, i) => {
                        return (<tr key={i}>
                            </tr>
                            <tr>{v.todo}</tr>
                            <br/>
                        >)
                    })}
                </table>
            </div> */}

        </>
    )
}

export default Dashboard
