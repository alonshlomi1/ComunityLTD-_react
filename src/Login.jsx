import React,{useState, useEffect} from 'react' 

const Login=(props)=>{
    
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    async function handle_login(e){
    
        e.preventDefault();
        const user = {
            'email': userEmail,
            'password':userPassword
        };
        var response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        if (response.ok){
            response = await response.json()
            console.log(response)
            props.setuser(response)
        }
        else{
            alert("Some of the Login detailes are invalid")
        }
    }

    function handle_forget(e){
        props.setpage("forfetPassword")
    }

	return(
		<div className='main_body'>
            <div>
                <h1>Login</h1>
            </div>
			<form onSubmit={handle_login}> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" 
                    value={userEmail}
                    onChange={(e)=>{setUserEmail(e.target.value)}}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw" 
                    value={userPassword}
                    onChange={(e)=>{setUserPassword(e.target.value)}}/> 
				</div>  
				<input className='submit_button' type="submit" value="Login"/>
			</form>
            <div>
                <button onClick={handle_forget}> forgot password</button>
            </div>
		</div>
	)
}

export default Login  