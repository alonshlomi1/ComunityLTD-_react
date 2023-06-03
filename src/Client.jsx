import React,{useState, useEffect} from 'react' 


const Client=(props)=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [tableData, setTableData] = useState([])
    async function handle_submit(e){
    
        e.preventDefault();
        const user = {
            'first_name': firstName,
            'last_name': lastName,
            'phone': phone,
            'email': email
        };
        const response = await fetch("https://127.0.0.1:5000/insertNewClient", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        if (response.ok){
            console.log("OK")
        }
    }
    async function handle_table(e){
    
        e.preventDefault();
        const user = {
            'first_name': firstName,
            'last_name': lastName,
            'phone': phone,
            'email': email
        };
        var response = await fetch("https://127.0.0.1:5000/getAllClients", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        if (response.ok){
            response = await response.json()
            setTableData(response)
        }
    }
	return(
		<div className='main_body'>
            <h3>Add new Client</h3>
			<form onSubmit={handle_submit}> 
                <div> 
					<label htmlFor="firstName">First Name:</label>
					<input type="text" name="firstName" id="firstName" 
                    value={firstName}
                    onChange={(e)=>{setFirstName(e.target.value)}}/> 
				</div> 
                <div> 
					<label htmlFor="lastName">Last Name:</label>
					<input type="text" name="lastName" id="lastName" 
                    value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}/> 
				</div> 
                <div> 
					<label htmlFor="phone">Phone:</label>
					<input type="text" name="phone" id="phone" 
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}/> 
				</div> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/> 
				</div>  
				<input className='submit_button' type="submit" value="Add"/>
			</form>
            <br/>
            <br/>
           
            <button onClick={handle_table}>Show all clients</button>
            {tableData.length == 0? <br/> :  <table>
            <thead>
                <tr>
                <th>first Name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((client) => (
                <tr key={client.id}>
                    <td>{client.first_name}</td>
                    <td>{client.last_name}</td>
                    <td>{client.phone}</td>
                    <td>{client.email}</td>
                </tr>
                ))}
            </tbody>
            </table> }
		</div>
	)
}

export default Client  