import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from "react";
import './styles/header.css'


const Header = () => {

   const { loggedInUser, setLoggedInUser} = useContext(UserContext);
   const navigation = useNavigate();

   const logOutUser = () => {
      setLoggedInUser(null);
      navigation('/login');
   }

   return (
      <>
      <header>
         <div className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/61/61498.png" alt="logo" />
         </div>
         {
               loggedInUser 
               ? 
         <div className='link'>
            <Link to='/home'>Home</Link>
            <Link to='/add'>Add new Post</Link>
            <button onClick={() => logOutUser()}>Log Out</button>
            
         </div>
         :
         <div className='link'>
            <Link to='/login'>Login</Link>
            <Link to='/'>Register</Link>
         </div>
         }
      </header>  
      <Outlet />
      </>
   );
}
 
export default Header;