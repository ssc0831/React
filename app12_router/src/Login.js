import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState(
        {
            id : '',
            pw : ''
        }
    )
    return(
        <div>
        <h2>Login</h2>
        ID : <input type="text" onChange={(e) =>{
            setUser({id : e.target.value, pw : user.pw})
        }} /><br/>
        PW : <input type="password" onChange={(e) =>{
            setUser({id : user.id, pw: e.target.value})
        }} /><br/>
        <Link to={`/login/result/${user.id}/${user.pw}`}>로그인</Link>
        <Outlet></Outlet>
        </div>
    )
}
export default Login;