import { useParams } from "react-router-dom"

const LoginResult = () => {
    const {id, pw} = useParams();
    console.log(`id : ${id}`, `pw : ${pw}`)
    return(
        <div>
          <h3>LoginResult</h3>
          <p>id : {id}</p>
          <p>pw : {pw}</p>
        </div>
    );
}
export default LoginResult;