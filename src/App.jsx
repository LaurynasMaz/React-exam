import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Home from './components/Home';
import Add from './components/Add';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/styles/form.css'

function App() {
   return (
      <>
      <div className='app'>
         <Routes>
            <Route element={<Header />}>
               <Route path="/" element={<Register />}/>
               <Route path="/login" element={<Login />}/>
               <Route path="/home" element={<Home />}/>
               <Route path="/add" element={<Add />}/>
            </Route>      
         </Routes>
      </div>
      <Footer />
      </>
   );
}

export default App;
