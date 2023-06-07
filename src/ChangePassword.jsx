import React,{useState, useEffect} from 'react' 


const ChangePassword=(props)=>{
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    async function handle_change(e){
    
        e.preventDefault();
        console.log(props)
        console.log(props.user)

        const user = {
            'email': props.user.data.email,
            'old_password': oldPassword,
            'new_password': newPassword
        };
        var response = await fetch("https://127.0.0.1:5000/changePassword", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        if (response.ok){
            console.log("OK")
            alert("Password Changed")
            props.setpage("home")
        }
        else{
            alert("Invalid details")
        }
    
    }

	return(
		<div className='main_body'>
            <div>
          <h1>Change Password</h1>
             </div>
			<form onSubmit={handle_change}> 
				<div> 
                    <label htmlFor="passw">Old Password</label>
					<input type="text" name="passw" id="passw" 
                    value={oldPassword}
                    onChange={(e)=>{setOldPassword(e.target.value)}}/>
				</div> 
				<div> 
					<label htmlFor="passw">New Password</label>
					<input type="text" name="passw" id="passw" 
                    value={newPassword}
                    onChange={(e)=>{setNewPassword(e.target.value)}}/> 
				</div>  
				<input  className='submit_button' type="submit" value="Change"/>
			</form>
		</div>
	)
}

export default ChangePassword  