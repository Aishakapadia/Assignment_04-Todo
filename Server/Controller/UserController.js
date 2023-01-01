const Signup_UserArr = [];
const Login_UserArr = [];
const Employee_Data = [];


exports.addSignup_user = (req, res) => {
    if (req.body)
        Signup_UserArr.push(req.body);
        console.log('from signup',JSON.stringify(Signup_UserArr));
    res.send({ data: Signup_UserArr });
}

exports.addLogin_user = (req, res) => {
    if (req.body)
        Login_UserArr.push(req.body);
        console.log("signup data here",Signup_UserArr);
        let Login_username = req.body.username;
        let signupEmail = Signup_UserArr.find(value => value.username == Login_username)
        let arr = [{Signup_data:signupEmail}]
        console.log('found',signupEmail);
    res.send({ data: arr });
}

// exports.addEmployee_data = (req, res) => {
//     if (req.body)
//     Employee_Data.push(req.body);
//     console.log('userAdded',req.body)
//     res.send(Employee_Data);
// }

exports.addEmployee_data = (req, res) => {
   
    let useremail = req.body;
    if (req.body){
        // console.log('checklllllllllll',useremail)
        // console.log(Signup_UserArr,JSON.stringify(Signup_UserArr));
        // let isEmail = Signup_UserArr.find(value => value.email== useremail)
        // console.log('found',isEmail);
        Employee_Data.push(req.body);
        console.log('userAdded',Employee_Data)
        res.send({ data:Employee_Data});
    }
   
}

// function getMessages(req, res) {
//     res.send(messagesArr);
// }

// module.exports = UserRouter;