const Signup_UserArr = [];
const Login_UserArr = [];

exports.addSignup_user = (req, res) => {
    if (req.body)
        Signup_UserArr.push(req.body);
    console.log('from signup', JSON.stringify(Signup_UserArr));
    res.send({ data: Signup_UserArr });
}

exports.addLogin_user = (req, res) => {
    if (req.body){
        Login_UserArr.push(req.body);
        console.log("signup data here", Signup_UserArr);
        let Login_username = req.body.username;
        let signupEmail = Signup_UserArr.find(value => value.username == Login_username)
        let arr = [{ Signup_data: signupEmail }]
        console.log('found', signupEmail);
        res.send({ data: arr });
    }
       
}


exports.addEmployee_data = (req, res) => {

    if (req.body) {
        let Login_username = req.body.username;
        let LoggedIn_user = Signup_UserArr.find(value => value.username == Login_username)

        console.log('checkingg todo 1', JSON.stringify(LoggedIn_user));

        if (LoggedIn_user) {
            for (let i = 0; i < Signup_UserArr.length; i++) {
                console.log('checkingg todo 2');
                if (Signup_UserArr[i].username === Login_username) {
                    Signup_UserArr[i].todo.push(req.body.TodoList);
                    console.log('checkingg todo 2 -- userAdded', Signup_UserArr[i])
                    res.send({ data: Signup_UserArr[i] });
                }
            }
        }

    }
}
