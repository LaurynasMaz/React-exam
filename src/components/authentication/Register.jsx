import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Register = () => {
   const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
   const [formInputs, setFormInputs] = useState({
      email: '',
      password: '',
      passwordRepeat: '',
   });
   const [invalidEmail, setInvalidEmail] = useState(false);
   const navigation = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if(users.find(user => user.email === formInputs.email)){
         setInvalidEmail(true);
      } else {
         let newUser = {
            ...formInputs,
            id: Date.now(),
         };
         addNewUser(newUser);
         setLoggedInUser(newUser);
         navigation('/home');
      }
   }

   return (
      <>
         <div className='form-container'>
            <form onSubmit={handleSubmit}>
               <label>
                  Email:
                  <input type="email" name="email" value={formInputs.email} required
                     onChange={(e) => setFormInputs({...formInputs, email:e.target.value})}
                  />
               </label>
               <label>
                  Password:
                  <input type="password" name="password" value={formInputs.password} required
                     onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
                  />
               </label>
               <label>
                  Repeat Password:
                  <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat} required
                     onChange={(e) => setFormInputs({...formInputs, passwordRepeat:e.target.value})}
                  />
               </label>
               <div className="buttonClass">
                  <button type="submit">Register</button>
               </div>
            </form>
            {
               invalidEmail && <span>User with such email already exists.</span>
            }
        </div> 
       </>
   );
}
 
export default Register;