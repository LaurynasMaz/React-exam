import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from "react";


const Header = () => {

   const { loggedInUser, setLoggedInUser} = useContext(UserContext);
   const navigation = useNavigate();

   const logOutUser = () => {
      setLoggedInUser(null);
      navigation('/login');
   }

   return (
      <>
      <img src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png" alt="logo" />
      {
            loggedInUser 
            ? 
      <div>
         <Link to='/'>Home</Link>
         <Link to='/add'>Add new Post</Link>
         <button onClick={() => logOutUser()}>Log Out</button>
         
      </div>
      :
      <div className="loginRegister">
         <Link to='/login'>Login</Link>
         <Link to='/register'>Register</Link>
      </div>
      }
         <Outlet />
         
      </>
   );
}
 
export default Header;