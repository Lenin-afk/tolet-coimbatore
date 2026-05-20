// TODO: Create a simple register form with username and password inputs
// and a submit button
function Register(){

    return(
        <div>
            <h1>Register</h1>
            <input 
                type="text"
                placeholder="Type your name"
            />
            <input         
                type="password"
                placeholder="Type your password"
            />
            <button>Register</button>
        </div>
    )
}

export default Register;