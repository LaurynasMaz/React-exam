import { Link, Outlet } from 'react-router-dom';

const Header = () => {
   return (
      <>
      <div>
         <Link to='/'>Home</Link>
         <Link to='/newPost'>Add new Post</Link>
      </div>
      <div className="loginRegister">
         <Link to='/login'>Login</Link>
         <Link to='/register'>Register</Link>
      </div>
         <hr />
         <Outlet />
      </>
   );
}
 
export default Header;