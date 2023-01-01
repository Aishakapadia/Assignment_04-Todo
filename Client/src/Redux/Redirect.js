import { useNavigate } from 'react-router-dom'

const fetchTodos = () => {

    const dashbaordRedirect = true;

    console.log("hello 1")
    const navigate = useNavigate();
    

    const checkLoginDetails = () => {
        console.log("hello 2")

        if (dashbaordRedirect == true) {
            navigate("/dashboard");
            console.log("hello 3")
        }

    }

    

}


export default fetchTodos
