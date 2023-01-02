import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Modal, Input } from 'antd';
import { addEmployeeData } from './Redux/Reducer'

const Dashboard = () => {

    const loginData = useSelector((state) => state.user.loginData)
    const TodoData = useSelector((state) => state.user.userData)

   let userName = loginData[0].Signup_data.fname;
   let username = loginData[0].Signup_data.username;
   let tableMain = [TodoData.todo];

    
    const dispatch = useDispatch()

    const [todo, setTodo] = useState();

    const [allRecord, setAllRecord] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        console.log('from login',JSON.stringify(TodoData.todo));
       
        // console.log("todolsot",todolist)
        if(todo){
            
        dispatch(addEmployeeData(todo))
        console.log('todo herrrrrrrrrrrrrrre',JSON.stringify(TodoData))
        AddNewUser();
        }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const Setting = (event) => {
        const { name, value } = event.target
        setTodo((data) => {
            return {
                ...data,
                username,
                [name]: value
            }
        })
    }

    const AddNewUser = () => {
        setAllRecord([...allRecord, todo]);
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
                    <Input name="TodoList" onChange={Setting} value={todo} />
                </Form.Item>

            </Modal>
                {/* <div>{table}</div> */}
                
            <div id="managerTable">
                <table>
                        <tr>
                            <th >Todo List</th>
                        </tr>
                    {tableMain.map((v, i) => {
                        return (<tr key={i}>
                            <tr>{v}</tr>
                            </tr> )
                    })}
                </table>
            </div>
            

        </>
    )
}

export default Dashboard
