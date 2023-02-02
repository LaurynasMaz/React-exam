import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const [formInputs, setFormInputs] = useState({
      email : '',
      password : ''
   });
   const [failedLogIn, setFailedLogIn] = useState(false);
   const { users, setLoggedInUser } = useContext(UserContext);

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      const loggedInUser = users.find(user => user.email === formInputs.email && user.password === formInputs.password);

      if (!loggedInUser) {
         setFailedLogIn(true);
         return;
      }

      setLoggedInUser(loggedInUser);
      navigate('/home');
   } 

   return (
   <>
      <div>
         <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input type="email" name="email"
               value={formInputs.email}
               onChange={(e)=>setFormInputs({...formInputs, email:e.target.value})}
            />
            </label>
            <label>
            Password:
            <input type="password" name="password"
               value={formInputs.password}
               onChange={(e)=>setFormInputs({...formInputs, password:e.target.value})}
            />
            </label>
            <input type="submit" value="Log In" />
            {
            failedLogIn && <span>Wrong email or password</span>
            }
         </form>
      </div>
   </>
   ); 
}

export default Login;