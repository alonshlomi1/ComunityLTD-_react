import React,{useState, useEffect} from 'react' 


const NewUser=(props)=> {
  const [propsValue, setpropsValue] = useState(props);
    useEffect(
        () => setpropsValue(props),
        [props]
    );
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [secUserPassword, setSecUserPassword] = useState("")

  async function handle_submit(e){
    {
      e.preventDefault();

        const user = {
            'email': userEmail,
            'password':userPassword
        };
        const response = await fetch("https://127.0.0.1:5000/submitNewUser", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        if (response.ok){
          alert("New User Created")
          props.setpage("home")        }
        else{
          alert("Email already exists")
        }
    }
}

  
  return (
    <div className='main_body'>
			<form onSubmit={handle_submit}>
        <div>
          <h1>New User</h1>
        </div> 
				<div> 
					<label htmlFor="email">Email: </label>
					<input type="text" name="email" id="email"
          value={userEmail}
          onChange={(e)=>{setUserEmail(e.target.value)}}/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password: </label>
					<input type="text" name="passw" id="passw"
          value={userPassword}
          onChange={(e)=>{setUserPassword(e.target.value)}}/> 
				</div> 
        <div> 
					<label htmlFor="passw">Password again:</label>
					<input type="text" name="passw" id="passw"
          value={secUserPassword}
          onChange={(e)=>{setSecUserPassword(e.target.value)}}/> 
				</div>  
				<input type="submit"  className='submit_button'
        disabled={userEmail == "" || userPassword!=secUserPassword || userPassword==""} 
        value="Submit"/>
			</form>

		</div>
  )
}

export default NewUser;