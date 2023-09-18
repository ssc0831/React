import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return(
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/topics">Topics</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}
export default Navigation;