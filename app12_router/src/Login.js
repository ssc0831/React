import { Link, Outlet } from "react-router-dom";

const Login = () => {
    return(
        <div>
        <h2>Login</h2>
        ID : <input type="text" /><br/>
        PW : <input type="password" /><br/>
        <Link to={`/login/result/${this.id}/${this.pw}`}>로그인</Link>
        <Outlet></Outlet>
        </div>
    )
}
export default Login;