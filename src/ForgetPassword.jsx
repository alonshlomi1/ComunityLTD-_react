import React,{useState, useEffect} from 'react' 


const ForgetPassword=(props)=> {
    const [userEmail, setUserEmail] = useState("")

    async function handle_send_email(e){
    
        e.preventDefault();
        const user = {
            'email': userEmail
        };
        var response = await fetch("https://127.0.0.1:5000/forgetPassword", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (response.ok){
            console.log("OK")        
        }else{
            alert("Invalid Email")
        }
    }
  function handle_login(e){
    props.setpage("login")
}
  return (
    <div className='main_body'>
        <div>
            <h1>Forget Password</h1>
            <h3>enter your email</h3>
        </div> 
		<form onSubmit={handle_send_email}>
            <div> 
				<label htmlFor="email">Email: </label>
				<input type="text" name="email" id="email" 
                    value={userEmail}
                    onChange={(e)=>{setUserEmail(e.target.value)}}/> 
                <input className='submit_button' type="submit" value="Send"/>
			</div> 
        </form>

        <div>
            <h4>check your new password in your mailbox</h4>
        </div> 
        <div>
            <button onClick={handle_login}> Login</button>
        </div>
    </div>
  )
}

export default ForgetPassword;