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
         <form onSubmit={handleSubmit}>
            <label>
               Email:
               <input type="email" name="email" value={formInputs.email}
                  onChange={(e) => setFormInputs({...formInputs, email:e.target.value})}
               />
            </label>
            <label>
               Password:
               <input type="password" name="password" value={formInputs.password}
                  onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
               />
            </label>
            <label>
               Repeat Password:
               <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat}
                  onChange={(e) => setFormInputs({...formInputs, passwordRepeat:e.target.value})}
               />
            </label>
            <input type="submit" value="Register" />
         </form>
         {
            invalidEmail && <span>User with such email already exists.</span>
         }
      </>
   );
}
 
export default Register;