import React,{useState} from 'react' 
import NewUser from './NewUser'
import ChangePassword from './ChangePassword'
import Client from './Client'
import Navbar from './Navbar'
import Home from './Home'

const ValidUser=(props)=>{

    const [page, setPage] = useState('home')
    if(page == 'home'){
        return (
            <div>
                <Navbar setpage={(page) => setPage(page)}/>
                <Home user={props.user} setpage={setPage} setuser={(user) => props.setuser(user)}/>
            </div>
    )}
    else if(page == 'clients'){
        return (
            <div>
                <Navbar setpage={(page) => setPage(page)}/>
                <Client user={props.user} setpage={setPage} setuser={(user) => props.setuser(user)}/>
            </div>
    )}
    else if(page == 'changePassword'){
       return(
            <div>
                <Navbar setpage={(page) => setPage(page)}/>
                <ChangePassword user={props.user} setpage={setPage} setuser={(user) => props.setuser(user)}/>
            </div>
    )}
    else{
        return(
            <div>
                <Navbar setpage={(page) => setPage(page)}/>
                <NewUser user={props.user} setpage={setPage} setuser={(user) => props.setuser(user)}/>
            </div>
     )}

}

export default ValidUser  