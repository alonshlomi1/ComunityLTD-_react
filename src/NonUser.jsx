import React,{useState, useEffect} from 'react' 
import Login from './Login'
import ForgetPassword from './ForgetPassword'
const NonUser=(props)=>{
    const [page, setPage] = useState('login')

    if(page == 'login'){
        return (
            <Login setuser={(user) => props.setuser(user)} setpage={setPage} user={props.user}/>
            
    )}
    else{
       return(
            <ForgetPassword setuser={(user) => props.setuser(user)} setpage={setPage} user={props.user}/>
    )}

}

export default NonUser  