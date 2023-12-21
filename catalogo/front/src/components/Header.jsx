import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const navitgate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout)
        dispatch(reset)
    }

  return (
        <header className="header">
            <div className="logo">
                    <Link to='/'>AppTareas</Link>
            </div>
            <ul>
                {user ? 
                (<>
                <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt>Logout</FaSignOutAlt>
                    </button>    
                </>)
                : (<>
                <li>
                    <Link to="/login"><FaSignInAlt/> Login</Link>
                </li>
                <li>
                    <Link to="/register"><FaUser/> Register</Link>
                </li></>) }
                
            </ul>
        </header>
      )
}

export default Header